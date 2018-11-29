CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_name TEXT,
    project_description TEXT,
    type TEXT
);

CREATE TABLE project_images (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    image_link TEXT
);