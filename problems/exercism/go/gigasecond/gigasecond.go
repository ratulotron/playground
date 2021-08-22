/*
Package gigasecond has a function AddGigasecond that takes someone's birthday
and calculates when someone passes a gigasecond (1000000000) of their lives.
*/
package gigasecond

import "time"

// AddGigasecond takes someone's birthday and returns when they pass a
// gigasecond age.
func AddGigasecond(t time.Time) time.Time {
	// const GigaInt = 1000000000
	// var gigaseconds = GigaInt * time.Second
	// return t.Add(gigaseconds)
	return t.Add(1e18)
}
