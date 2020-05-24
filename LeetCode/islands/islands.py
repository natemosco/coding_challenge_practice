class Solution:
    def dft(self, i, j, grid, height, width):
        if i < 0 or i >= height or j < 0 or j >= width or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        self.dft(i-1, j, grid, height, width)
        self.dft(i+1, j, grid, height, width)
        self.dft(i, j-1, grid, height, width)
        self.dft(i, j+1, grid, height, width)

    def numIslands(self, grid: List[List[str]]) -> int:
        if len(grid) == 0:
            return 0
        count = 0
        height = len(grid)
        width = len(grid[0])
        for i in range(height):
            for j in range(width):
                if grid[i][j] == '1':
                    count += 1
                    self.dft(i, j, grid, height, width)
        return count
