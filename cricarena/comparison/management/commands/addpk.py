import json

# Load your JSON data
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pk_counter = 1  # Start pk numbering from 1 (or any number you want)

for obj in data:
    if obj.get('model') == 'comparison.player':
        obj['pk'] = pk_counter
        pk_counter += 1

# Save the modified data back to the file (or a new file)
with open('all_data_with_pk.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)