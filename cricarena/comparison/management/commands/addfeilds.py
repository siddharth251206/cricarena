import json

# Suppose 'players' is your list of 1000 dicts as above
with open('all_data_with_pk.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
fixture = []
for player in data:
    # Extract pk, model, and the rest as fields
    pk = player.pop('pk')
    model = player.pop('model')
    fixture.append({
        "model": model,
        "pk": pk,
        "fields": player
    })

# Dump to JSON
with open('players_fixture.json', 'w') as f:
    json.dump(fixture, f, indent=2)