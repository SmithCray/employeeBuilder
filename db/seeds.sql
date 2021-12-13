INSERT INTO department (id, name)
VALUES (30, "Lion King"),
       (27, "The Godfather"),
       (12, "West Side Story"),
       (35, "Parasite"),
       (21, "The Wizard of Oz");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Zazu is underrated. Give that hornbill a sequel!", 150, 30),
       (2, "I'm gonna make him an offer you can't refuse, watch this movie", 127, 27),
       (3, "Scar is the lion everyone loves to hate", 122, 27),
       (4, "Ten years of ballet and three years of tap to join a gang in this neighborhood", 119, 27),
       (5, "The tin man gave a metallic, hollow performance", 121, 21),
       (6, "Hakuna matata", 129, 21),
       (7, "Those flying monkeys are nightmare fuel!", 127, 35);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (30, "Lion", "King", 11, 0),
       (27, "The", "Godfather", 13, 0),
       (12, "WestSide", "Story", 15, 0),
       (35, "Parasite", "Parasite", 17, 0),
       (21, "Wizard", "ofOz", 19, 0);
       
       
