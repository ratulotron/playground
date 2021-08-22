// Package bob simulates conversation with a lackadaisical teenager
package bob

import (
	"strings"
	"unicode"
)

// Remark is the struct to process a remark
type Remark struct {
	remark string
}

func (r *Remark) isQuestion() bool {
	return strings.HasSuffix(r.remark, "?")
}

func (r *Remark) isEmpty() bool {
	return r.remark == ""
}

func (r *Remark) hasChar() bool {
	for _, c := range r.remark {
		if unicode.IsLetter(c) {
			return true
		}
	}
	return false
}

func (r *Remark) isAllCaps() bool {
	return (strings.ToUpper(r.remark) == r.remark) && r.hasChar()
}

func (r *Remark) respond() string {
	switch {
	case r.isAllCaps() && r.isQuestion():
		return "Calm down, I know what I'm doing!"
	case r.isAllCaps() && !r.isQuestion():
		return "Whoa, chill out!"
	case r.isQuestion():
		return "Sure."
	case r.isEmpty():
		return "Fine. Be that way!"
	}
	return "Whatever."
}

func newRemark(s string) Remark {
	return Remark{
		remark: strings.TrimSpace(s),
	}
}

// Hey generates responses from Bob
func Hey(remark string) string {
	r := newRemark(remark)
	return r.respond()
}
