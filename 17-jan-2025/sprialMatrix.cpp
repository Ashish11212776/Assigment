#include<iostream>
#include<vector>
using namespace std;
int main(){
    int m,n;
    cin>>m>>n;
 vector<vector<int>>matrix(m,vector<int>(n,0));
 for(int i=0;i<m;i++){
    for(int j=0;j<n;j++){
        int val=0;
        cin>>val;
        matrix[i][j]=val;
    }
 }
  vector<int>ans=spiralOrder(matrix);
  for(int i=0;i<ans.size();i++){
    cout<<ans[i];
  }
  return 0;
 
}
vector<int> spiralOrder(vector<vector<int>> &matrix)
{
    int row = matrix.size();
    int col = matrix[0].size();
    int totalElement = row * col; // use in track the record how much element are print
    vector<int> ans;
    int cnt = 0;
    int startRow = 0;
    int startCol = 0;
    int endingRow = row - 1;
    int endingCol = col - 1;

    while (cnt < totalElement)
    {
        // starting row print
        for (int index = startCol; cnt < totalElement && index <= endingCol; index++)
        {
            ans.push_back(matrix[startRow][index]);
            cnt++;
        }
        startRow++;
        // ending col
        for (int index = startRow; cnt < totalElement && index <= endingRow; index++)
        {
            ans.push_back(matrix[index][endingCol]);
            cnt++;
        }
        endingCol--;
        // ending row
        for (int index = endingCol; cnt < totalElement && index >= startCol; index--)
        {
            ans.push_back(matrix[endingRow][index]);
            cnt++;
        }
        endingRow--;
        // startcol

        for (int index = endingRow; cnt < totalElement && index >= startRow; index--)
        {
            ans.push_back(matrix[index][startCol]);
            cnt++;
        }

        startCol++;
    }
    return ans;
}
