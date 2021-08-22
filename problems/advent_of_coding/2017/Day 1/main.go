package main

import (
	"fmt"
)

func increaseCount(number int, occuranceMap map[int]int) {
	_, ok := occuranceMap[number]
	if !ok {
		occuranceMap[number] = 1
	} else {
		occuranceMap[number]++
	}
}

func findOccurances(numbers []int) map[int]int {
	multipleOccurances := make(map[int]int)
	previousNumber := numbers[0]
	if previousNumber == numbers[len(numbers)-1] {
		increaseCount(previousNumber, multipleOccurances)
	}
	for _, currentNumber := range numbers[1:] {
		if previousNumber == currentNumber {
			increaseCount(previousNumber, multipleOccurances)
		} else {
			previousNumber = currentNumber
		}
	}
	return multipleOccurances
}

func sumOfOccurances(occuranceMap map[int]int) int {
	sum := 0
	for idx, num := range occuranceMap {
		sum += idx * num
	}
	return sum
}

func takeInput() []int {
	print("enter a number: ")
	var inputNumber int
	fmt.Scan(&inputNumber)
	const factor = 10
	var inputSequence []int
	for inputNumber > 0 {
		inputSequence = append(inputSequence, inputNumber%factor)
		inputNumber = inputNumber / factor
	}
	return inputSequence
}

func main() {
	numberInputs := takeInput()
	occurances := findOccurances(numberInputs)
	sum := sumOfOccurances(occurances)
	fmt.Println(sum)
}
