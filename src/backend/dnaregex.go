package backend

import (
	"regexp"
)

func IsValid(pattern string) bool {
	var onlyAGCT, _ = regexp.Compile("^[AGCT]+$")
	var isMatch = onlyAGCT.MatchString(pattern)
	return isMatch
}
