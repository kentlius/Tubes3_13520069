package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/Tubes3_13520069/src/server/pkg/models"
	"github.com/gorilla/mux"
)

func (h handler) UpdateUser(w http.ResponseWriter, r *http.Request) {
    // Read dynamic id parameter
    vars := mux.Vars(r)
    id, _ := strconv.Atoi(vars["id"])

    // Read request body
    defer r.Body.Close()
    body, err := ioutil.ReadAll(r.Body)

    if err != nil {
        log.Fatalln(err)
    }

    var updatedUser models.User
    json.Unmarshal(body, &updatedUser)

    var user models.User

    if result := h.DB.First(&user, id); result.Error != nil {
        fmt.Println(result.Error)
    }

    user.Date = updatedUser.Date
    user.Name = updatedUser.Name
    user.Prediction = updatedUser.Prediction
    user.Percentage = updatedUser.Percentage
    user.IsSick = updatedUser.IsSick

    h.DB.Save(&user)

    w.Header().Add("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode("Updated")
}
