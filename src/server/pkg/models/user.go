package models

type User struct {
	Id         int    `json:"id" gorm:"primaryKey"`
	Date       string `json:"date"`
	Name       string `json:"name"`
	Prediction string `json:"prediction"`
	Percentage int    `json:"percentage"`
	IsSick     bool   `json:"isSick"`
	DNA        string `json:"dna"`
	Method     string `json:"method"`
}
