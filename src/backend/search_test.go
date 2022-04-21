package backend

import (
	"testing"
)

func TestBooyerMoore(t *testing.T) {
	test := "THIS IS A TEST TEXT"
	test2 := "TEST"
	test3 := "ACGT"
	if BooyerMoore(test2, test) != 10 {
		t.Error("Booyer Moore failed")
	}
	if BooyerMoore(test3, test) != -1 {
		t.Error("Booyer Moore failed")
	}
}

func TestKMP(t *testing.T) {
	test := "THIS IS A TEST TEXT"
	test2 := "TEST"
	test3 := "ACGT"
	test4 := "TESTING"
	if KMP(test2, test) != 10 {
		t.Error("KMP failed")
	}
	if KMP(test3, test) != -1 {
		t.Error("KMP failed")
	}
	if KMP(test4, test) != -1 {
		t.Error("KMP failed")
	}
}
