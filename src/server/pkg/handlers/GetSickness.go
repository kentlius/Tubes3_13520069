package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/Tubes3_13520069/src/server/pkg/models"
	"github.com/gorilla/mux"
)

func (h handler) GetSickness(w http.ResponseWriter, r *http.Request) {
    // Read dynamic id parameter
    vars := mux.Vars(r)
    id, _ := strconv.Atoi(vars["id"])

    // Find sickness by Id
    var sickness models.Sickness

    if result := h.DB.First(&sickness, id); result.Error != nil {
        fmt.Println(result.Error)
    }

    w.Header().Add("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode(sickness)
}
