// 1. Trapping Rainwater Problem states that given an array of n non-negative
// integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it can trap after rain.
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int TrapWater(int arr[], int n)
{
    if (n <= 2)
        return 0;
    vector<int> leftMax(n), rightMax(n);
    leftMax[0] = arr[0];
    rightMax[n - 1] = arr[n - 1];

    for (int i = 1; i < n; i++)
    {
        leftMax[i] = max(leftMax[i - 1], arr[i]);
    }
    for (int i = n - 2; i >= 0; i--)
    {
        rightMax[i] = max(rightMax[i + 1], arr[i]);
    }

    int totalWater = 0;
    for (int i = 0; i < n; i++)
    {
        totalWater += max(0, min(leftMax[i], rightMax[i]) - arr[i]);
    }

    return totalWater;
}

int main()
{
    int n;
    cout << "Enter th sizee of your arr";
    cin >> n;
    int arr[n] = {};
    cout << "enter values";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << TrapWater(arr, n);

    return 0;
}
