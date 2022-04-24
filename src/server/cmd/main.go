package main

import (
	"log"
	"net/http"

	"github.com/Tubes3_13520069/src/server/pkg/db"
	"github.com/Tubes3_13520069/src/server/pkg/handlers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
    DB := db.Init()
    h := handlers.New(DB)
    router := mux.NewRouter()
    c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
	})

    router.HandleFunc("/users", h.GetAllUsers).Methods(http.MethodGet)
    router.HandleFunc("/users/{id}", h.GetUser).Methods(http.MethodGet)
    router.HandleFunc("/users", h.AddUser).Methods(http.MethodPost)
    router.HandleFunc("/users/{id}", h.UpdateUser).Methods(http.MethodPut)
    router.HandleFunc("/users/{id}", h.DeleteUser).Methods(http.MethodDelete)

    log.Println("API is running!")
    http.ListenAndServe("127.0.0.1:4000", c.Handler(router))
}