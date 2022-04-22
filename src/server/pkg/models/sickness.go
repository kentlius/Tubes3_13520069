package models

type Sickness struct {
	Id   int    `json:"id" gorm:"primaryKey"`
	Name string `json:"name"`
	DNA  string `json:"dna"`
}