package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/Tubes3_13520069/src/server/pkg/models"
)

func (h handler) AddUser(w http.ResponseWriter, r *http.Request) {
	// Read to request body
	defer r.Body.Close()
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		log.Fatalln(err)
	}

	var user models.User
	var Sicknesses []models.Sickness
	json.Unmarshal(body, &user)
	if result := h.DB.Select("dna").Where("name = ?", user.Prediction).First(&Sicknesses); result.Error != nil {
		fmt.Println(result.Error)
	}
	fmt.Println(Sicknesses)
	if IsValid(user.DNA) && len(Sicknesses) > 0 {
		// dnaPenyakit := "ATCGTCTGA"
		dnaPenyakit := Sicknesses[0].DNA
		if user.Method == "Boyer-Moore" {
			if BoyerMoore(dnaPenyakit, user.DNA) {
				user.IsSick = true
				user.Percentage = 100
			} else {
				user.Percentage = countSimilarity(dnaPenyakit, user.DNA)
				if user.Percentage >= 80 {
					user.IsSick = true
				} else {
					user.IsSick = false
				}
			}
		} else if user.Method == "Knuth-Morris-Pratt" {
			if KMP(dnaPenyakit, user.DNA) {
				user.IsSick = true
				user.Percentage = 100
			} else {
				user.Percentage = countSimilarity(dnaPenyakit, user.DNA)
				if user.Percentage >= 80 {
					user.IsSick = true
				} else {
					user.IsSick = false
				}
			}
		}

		// Append to the Users table
		user.Percentage = -1
		if result := h.DB.Create(&user); result.Error != nil {
			fmt.Println(result.Error)
		}

		// Send a 201 created response
		w.Header().Add("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode("Created")
	}
}
