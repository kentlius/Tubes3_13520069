package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/Tubes3_13520069/src/server/pkg/models"
	"github.com/gorilla/mux"
)

func (h handler) DeleteUser(w http.ResponseWriter, r *http.Request) {
    // Read the dynamic id parameter
    vars := mux.Vars(r)
    id, _ := strconv.Atoi(vars["id"])

    // Find the user by Id

    var user models.User

    if result := h.DB.First(&user, id); result.Error != nil {
        fmt.Println(result.Error)
    }

    // Delete that user
    h.DB.Delete(&user)

    w.Header().Add("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode("Deleted")
}
