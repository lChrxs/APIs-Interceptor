export interface Pokemon {
  abilities:                string[];
  moves:                    string[];
  name:                     string;
  sprites:                  Sprites;
  types:                    string[];
}

export interface Sprites {
  front_default:       string;
  back_default:        string;
  front_female?:       string;
  back_female?:        string;
  front_shiny?:        string;
  back_shiny?:         string;
}

