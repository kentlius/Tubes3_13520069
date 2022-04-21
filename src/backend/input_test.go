package backend

import (
	"testing"
)

func TestIsValid(t *testing.T) {
	test := "ACGT"
	test2 := "TESTING"
	if !IsValid(test) {
		t.Error("Test ISValid 1 failed")
	}
	if IsValid(test2) {
		t.Error("Test IsValid 2 failed")
	}
}

func TestRead(t *testing.T) {
	if ReadFile("test/test.txt") != "THIS IS A TEST TEXT" {
		t.Error("Test ReadFile 1 failed")
	}
	if ReadFile("test/testfail.txt") != "AGAGAHCAC JAGCCCCLL" {
		t.Error("Test ReadFile 2 failed")
	}
	if ReadFile("test/testpass.txt") != "ACGTGCTTTCAGAGACCTTTTGAGA" {
		t.Error("Test ReadFile 3 failed")
	}
}

func TestCombine(t *testing.T) {
	if IsValid(ReadFile("test/testfail.txt")) != false {
		t.Error("Test Combine 1 failed")
	}
	if IsValid(ReadFile("test/testpass.txt")) != true {
		t.Error("Test Combine 2 failed")
	}
}
