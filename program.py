def solve(width, height, length, mass):
    volume = width * height * length
    bulky = volume >= 1000000 or width >= 150 or height >= 150 or length >= 150

    if bulky and mass >= 20:
        return "REJECTED"
    elif bulky or mass >= 20:
        return "SPECIAL"
    else:
        return "STANDARD"
    
print(solve(160, 70, 70, 10))
print(solve(120, 100, 100, 10))
print(solve(90, 90, 118, 10))
print(solve(120, 100, 50, 30))
print(solve(80, 110, 80, 70))
print(solve(70, 80, 90, 10))
print(solve(100, 120, 60, 19))
print(solve(150, 70, 70, 10))
print(solve(120, 100, 100, 10))
print(solve(90, 90, 118, 10))
print(solve(120, 100, 110, 20))
print(solve(80, 110, 80, 70))
print(solve(70, 80, 90, 10))
print(solve(100, 150, 60, 30))
# Add any other manual tests you want to add below