from heapq import heappop, heappush
def medians_sum(numList: list) -> int:
    mediansSum = 0
    firstHalf, secondHalf = [], []
    for num in numList:
        heappush(firstHalf, -num)
        heappush(secondHalf, -heappop(firstHalf))
        if len(firstHalf) < len(secondHalf):
            heappush(firstHalf, -heappop(secondHalf))
        mediansSum += -firstHalf[0]
    return mediansSum


if __name__ == "__main__":
    numList = [5, 10, 8, 1, 7, 3, 9, 6, 2, 4]
    print(medians_sum(numList))
