package main

import (
	"fmt"

	"backend"
)

func main() {
	test := "THIS IS A TEST TEXT"
	test2 := "TEST"
	test3 := "ACGT"
	test4 := "TESTING"

	fmt.Println(backend.BooyerMoore(test2, test))
	fmt.Println(backend.IsValid(test3))
	fmt.Println(backend.IsValid(test4))
}
