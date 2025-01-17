#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void findCombination(string digits, int index, string mapping[], vector<string> &ans, string output)
{
    // base case
    if (index >= digits.length())
    {
        ans.push_back(output);
        return;
    }
    int number = digits[index] - '0';
    string val = mapping[number];
    for (int j = 0; j < val.length(); j++)
    {
        output += val[j];
        findCombination(digits, index + 1, mapping, ans, output);
        output.pop_back();
    }
}
int main() 
{
    string digits="";
    cin>>digits;
    vector<string> ans;
    string mapping[10] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    string output = "";
    if (digits.length() == 0)
        return ans;
    findCombination(digits, 0, mapping, ans, output);
   for(int i=0;i<ans.length();i++){
    cout<<ans[i]<<" ";
   }
   return 0;
}