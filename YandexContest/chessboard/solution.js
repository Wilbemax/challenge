//node.js


//python
//N = int(input())
// cells = [tuple(map(int, input().split())) for _ in range(N)]
//
// perimeter = 0
//
// def is_cut_cell(row, col):
//     return (row, col) in cells
//
//
// def check_neighbors(row, col):
//     count = 0
//     if (row - 1, col) in cells:
//         count += 1
//     if (row + 1, col) in cells:
//         count += 1
//     if (row, col - 1) in cells:
//         count += 1
//     if (row, col + 1) in cells:
//         count += 1
//     return count
//
// for cell in cells:
//     row, col = cell
//     perimeter += 4 - check_neighbors(row, col)
//
// print(perimeter)