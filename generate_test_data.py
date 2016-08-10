#!/usr/bin/env python3
import json, uuid, random, math
from faker import Faker
fake = Faker()

num_tags = 20
num_bookmarks = 100

tags = [ {"id": i,
          "name": fake.sentence(nb_words=6, variable_nb_words=True),
          "owner": random.choice(["test", "admin"])
          } for i in range(1, num_tags+1)]

data = {
    "tags": tags,
    "bookmarks": [
        {
         "id": i,
         "url": fake.url(),
         "title": fake.catch_phrase(),
         "desription": fake.text(max_nb_chars=200),
         "content": '\n\n'.join(fake.paragraphs(nb=2)),
         "cover": 'http://fakeimg.pl/78x78/',
         "date_created": fake.date_time_between(start_date="-1y", end_date="now", tzinfo=None).isoformat(),
         "date_updated": fake.date_time_this_month(before_now=True, after_now=False, tzinfo=None).isoformat(),
         "owner": random.choice(["admin", "test"]),
         "tags": random.sample(tags, random.randrange(math.floor(num_tags / 2))),
         "is_trashed": random.choice([True, False, False, False]),
         "domain": fake.domain_name()
    } for i in range(1, num_bookmarks+1)]
}

with open('db.json', 'w') as db_file:
    # print the test json data
    db_file.write(json.dumps(data, sort_keys=True, indent=4))
