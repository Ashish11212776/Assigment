// 3. Given an array of integers where each element represents the max number of
// steps that can be made forward from that element. The task is to find the minimum number of jumps to reach the end of the array
// (starting from the first element).
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int findMinimumSteps(int arr[], int n)
{
    int step = 0, i = 0;
    int lastjumpidx = 0;
    int maxcov = 0;
    if (arr[0] == 0 || n == 0)
        return step;

    for (int i = 0; i < n; i++)
    {
        maxcov = max(maxcov, i + arr[i]);
        if (i == lastjumpidx)
        {
            lastjumpidx = maxcov;
            step++;

            if (maxcov >= n)
                return step;
        }
    }
    return 0;
}
int main()
{
    int n, target;
    cout << "Enter th sizee of your arr";
    cin >> n;
    int arr[n] = {};
    cout << "enter values";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << findMinimumSteps(arr, n);

    return 0;
}      