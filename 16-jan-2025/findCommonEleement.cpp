// 6. Given three sorted arrays in non-decreasing order, print all common elements in these arrays.
#include <iostream>
using namespace std;
void findCommonElement(int arr1[], int arr2[], int arr3[], int n, int m, int p)
{
    int i = 0, j = 0, k = 0;
    while (i < n && j < m && k < p)
    {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k])
        {
            cout << arr1[i] << " ";
            i++;
            j++;
            k++;
        }
        else if (arr1[i] < arr2[j])
        {
            i++;
        }
        else if (arr2[j] < arr3[k])
        {
            j++;
        }
        else
        {
            k++;
        }
    }
}
int main()
{
    int n = 5, m = 5, p = 5;
    int arr1[n] = {1, 2, 3, 5, 6};
    int arr2[m] = {1, 2, 3, 5, 6};
    int arr3[p] = {1, 2, 3, 5, 6};
    int n = 5;
    findCommonElement(arr1, arr2, arr3, n, n, n);
    return 0;
}