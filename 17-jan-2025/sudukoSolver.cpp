
    bool isSafe(int row, int col, vector<vector<char>> &board, char val)
    {
        for (int i = 0; i < board.size(); i++)
        {
            if (board[row][i] == val || board[i][col] == val)
                return false;

            if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == val)
                return false;
        }
        return true;
    }

    bool solve(vector<vector<char>> &board)
    {
        int n = board.size();
        for (int row = 0; row < n; row++)
        {
            for (int col = 0; col < n; col++)
            {
                if (board[row][col] == '.')
                {
                    for (char i = '1'; i <= '9'; i++)
                    {
                        if (isSafe(row, col, board, i))
                        {
                            board[row][col] = i;
                            // recursion
                            bool aagesoluctionpossible = solve(board);
                            if (aagesoluctionpossible)
                                return true;
                            else
                            {
                                // backtrack
                                board[row][col] = '.';
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    int main()
    {
        int m, n;
        cin >> m >> n;
        vector<vector<char>> matrix(m, vector<int>(n, 0));
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                int val = 0;
                cin >> val;
                matrix[i][j] = val;
            }
        }
        solve(matrix);

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
              cout<<matrix[i][j]<<" ";
            }
            cout<<endl;
        }
        return 0;
    }
