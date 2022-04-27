package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
    "strings"

	"github.com/Tubes3_13520069/src/server/pkg/models"
)

func (h handler) GetAllUsers(w http.ResponseWriter, r *http.Request) {
    var users []models.User

    query := r.URL.Query().Get("query")

    if IsDDMMYYYYandName(query) {
        split := strings.Split(query, " ")
        if result := h.DB.Where("date LIKE ? AND prediction LIKE ?", "%"+split[0]+"%", "%"+split[1]+"%").Find(&users); result.Error != nil {
            fmt.Println(result.Error)
        }
    } else if IsDDMMYYYY(query) {
        if result := h.DB.Where("date LIKE ?", "%"+query+"%").Find(&users); result.Error != nil {
            fmt.Println(result.Error)
        }
    } else if query != "" {
        if result := h.DB.Where("prediction LIKE ?", "%"+query+"%").Find(&users); result.Error != nil {
            fmt.Println(result.Error)
        }
    } else {
        if result := h.DB.Find(&users); result.Error != nil {
            fmt.Println(result.Error)
        }
    }

    w.Header().Add("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode(users)
}
