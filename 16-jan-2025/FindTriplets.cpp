// 2. Given an array arr[] of size n and an integer sum,
// the task is to check if there is a triplet in the array which sums up to the given target sum.
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> ans;

void TargetSum(int arr[], int n, int target, vector<int> tmp)
{
    // base case
    if (n <= 0)
    {
        if (tmp.size() == 3 && target == 0)
            ans.push_back(tmp);
        return;
    }
    if (target < 0)
    {
        return;
    }
    TargetSum(arr, n - 1, target, tmp);
    target -= arr[n - 1];
    tmp.push_back(arr[n - 1]);
    TargetSum(arr, n - 1, target, tmp);
}

int main()
{
    int n, target;
    cout << "Enter th sizee of your arr";
    cin >> n;
    if (n <= 2)
    {
        cout << "Triplet does't exits";
    }
    int arr[n] = {};
    cout << "enter values";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << "What is your Target";
    cin >> target;
    vector<int> tmp;
    TargetSum(arr, n, target, tmp);

    // print the ans array;
    for (int i = 0; i < ans.size(); i++)
    {
        for (int j = 0; j < ans[0].size(); j++)
        {
            cout << ans[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}