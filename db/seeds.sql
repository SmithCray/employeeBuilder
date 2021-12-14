INSERT INTO department (id, name)
VALUES (30, "LionKing"),
       (27, "TheGodfather"),
       (12, "WestSideStory"),
       (35, "ParasiteParasite"),
       (21, "TheWizardofOz");

INSERT INTO roles (title, salary, department_id)
VALUES ("Zazu is underrated. Give that hornbill a sequel!", 150, 30),
       ("I'm gonna make him an offer you can't refuse, watch this movie", 127, 27),
       ("Scar is the lion everyone loves to hate", 122, 27),
       ("Ten years of ballet and three years of tap to join a gang in this neighborhood", 119, 27),
       ("The tin man gave a metallic, hollow performance", 121, 21),
       ("Hakuna matata", 129, 21),
       ("Those flying monkeys are nightmare fuel!", 127, 35);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lion", "King", 11, 0),
       ("The", "Godfather", 13, 0),
       ("WestSide", "Story", 15, 0),
       ("Parasite", "Parasite", 17, 0),
       ("Wizard", "ofOz", 19, 0);
       
