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
	json.Unmarshal(body, &sicknesses)

	if(IsValid(sicknesses.DNA)) {
		// Append to the Sicknesses table
		if result := h.DB.Create(&sicknesses); result.Error != nil {
			fmt.Println(result.Error)
		}
	}

	// Send a 201 created response
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode("Created")
}
