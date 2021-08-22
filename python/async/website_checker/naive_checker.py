import sys
import
from timeit import default_timer

def website_status(websites):
  statuses = {}
  for website in websites:
    response = requests.get(website)
    status = response.status_code
    if not statuses.get(status):
      statuses[status] = 0
    statuses[status] += 1
  return statuses


def main():
  filename = sys.argv[1]
  with open(filename, 'r') as f:
    websites = [url for url in f.read().split('\n') if url != ""]
  start = default_timer()
  print(json.dumps(website_status(websites)))
  end = default_timer()
  print("Naive approach: ", end - start)


if __name__ == '__main__':
    main()