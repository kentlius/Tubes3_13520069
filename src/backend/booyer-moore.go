package main

import (
	"fmt"
	"math"
)

func getLastOccurrence(pattern string) [128]int {
	var lastOccurrence [128]int
	for i := 0; i < 128; i++ {
		lastOccurrence[i] = -1
	}
	for i := 0; i < len(pattern); i++ {
		lastOccurrence[pattern[i]] = i
	}
	return lastOccurrence
}

func booyerMoore(pattern string, text string) int {
	lastOccurrence := getLastOccurrence(pattern)
	n := len(text)
	m := len(pattern)
	if m > n {
		return -1
	}
	i := m - 1
	j := m - 1
	for i <= n-1 {
		if text[i] == pattern[j] {
			if j == 0 {
				return i
			}
			i--
			j--
		} else {
			last := lastOccurrence[text[i]]
			min := math.Min(float64(j), float64(1+last))
			i = i + m - int(min)
			j = m - 1
		}
	}
	return -1
}

func main() {
	var text string = "THIS IS A TEST TEXT"
	var pattern string = "TEST"
	var result int = booyerMoore(pattern, text)
	fmt.Println(result)
}
