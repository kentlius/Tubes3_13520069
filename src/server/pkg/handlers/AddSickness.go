package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/Tubes3_13520069/src/server/pkg/models"
)

func (h handler) AddSickness(w http.ResponseWriter, r *http.Request) {
	// Read to request body
	defer r.Body.Close()
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		log.Fatalln(err)
	}

	var sicknesses models.Sickness
	var sicknesses2 []models.Sickness
	json.Unmarshal(body, &sicknesses)

	if result := h.DB.Select("dna").Where("name = ?", sicknesses.Name).First(&sicknesses2); result.Error != nil {
		fmt.Println(result.Error)
	}
	fmt.Println(sicknesses2)
	if IsValid(sicknesses.DNA) && len(sicknesses2) == 0 {
		// Append to the Sicknesses table
		if result := h.DB.Create(&sicknesses); result.Error != nil {
			fmt.Println(result.Error)
		}
	} else if len(sicknesses2) > 0 {
		if result := h.DB.Model(&sicknesses).Where("name = ?", sicknesses.Name).Update("dna", sicknesses.DNA); result.Error != nil {
			fmt.Println(result.Error)
		}
	}

	// Send a 201 created response
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode("Created")
}
