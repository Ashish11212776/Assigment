/ 7. Find the factorial of a large number.
#include <iostream>
    using namespace std;
#define ull unsigned long long
ull findFact(int n)
{
    // base case
    if (n <= 1)
    {
        return 1;
    }
    return n * findFact(n - 1);
}
int main()
{
    ull n;
    cin >> n;
    ull ans = findFact(n);
    cout << ans;
    return 0;
}