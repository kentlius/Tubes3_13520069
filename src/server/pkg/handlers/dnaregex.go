package handlers

import (
	"regexp"
)

func IsValid(pattern string) bool {
	var onlyAGCT, _ = regexp.Compile("^[AGCT]+$")
	var isMatch = onlyAGCT.MatchString(pattern)
	return isMatch
}

func IsDDMMYYYY(pattern string) bool {
	var ddmmYYYY, _ = regexp.Compile(`^(0[1-9]|[12][0-9]|3[01])[/]([1-9]|1[012])[/](19|20)\d\d$`)
	var isMatch = ddmmYYYY.MatchString(pattern)
	return isMatch
}

func IsDDMMYYYYandName(pattern string) bool {
	var ddmmYYYYandName, _ = regexp.Compile(`^(0[1-9]|[12][0-9]|3[01])[/]([1-9]|1[012])[/](19|20)\d\d[ ][a-z|A-Z|0-9|-|&]+$`)
	var isMatch = ddmmYYYYandName.MatchString(pattern)
	return isMatch
}

func IsNameandDDMMYYYY(pattern string) bool {
	var nameandddmmYYYY, _ = regexp.Compile(`^[a-z|A-Z]+[ ][0-9]+[/]([1-9]|1[012])[/](19|20)\d\d$`)
	var isMatch = nameandddmmYYYY.MatchString(pattern)
	return isMatch
}

func IsName(pattern string) bool {
	var name, _ = regexp.Compile(`^[a-z|A-Z| |0-9]+$`)
	var isMatch = name.MatchString(pattern)
	return isMatch
}
