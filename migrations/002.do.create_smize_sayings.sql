CREATE TABLE smize_sayings (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    category_id INTEGER
        REFERENCES smize_categories(id) ON DELETE CASCADE NOT NULL,
    saying_content TEXT NOT NULL
);