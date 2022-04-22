package backend

func hammingDistance(x string, y string) int {
	var count int
	for i := 0; i < len(x); i++ {
		if x[i] == y[i] {
			count++
		}
	}
	return count
}

func countSimilarity(pattern string, text string) int {
	count := 0
	n := len(text)
	m := len(pattern)
	for i := 0; i < n-m+1; i++ {
		curr := hammingDistance(pattern, text[i:i+m])
		if curr > count {
			count = curr
		}
	}
	return count * 100 / m
}
