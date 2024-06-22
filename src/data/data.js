function Animals(name, image, group, lifespan, food, description, length, weight, found) {
    this.name = name;
    this.image = image; 
    this.group = group;
    this.lifespan = lifespan;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
}


let echidna = new Animals (
    "Echidna",
    "/Images/echidna.avif",
    "Mammals",
    "50 years",
    "insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "76cm",
    "10kg",
    "Throughout Australia"
)

let quokka = new Animals (
    "Quokka",
    "/Images/quokka.webp",
    "Mammals",
    "10 years",
    "Plant eaters, they munch on shrubs and grasses.",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "50 cm",
    "3kg",
    "Only found on Rottnest Island and a few places on mainland Western Australia."
)

let tasmaniandevil = new Animals (
    "Tasmanian Devil",
    "/Images/tasmaniandevil.webp",
    "Mammals",
    "5 years",
    "A predator, they eat meat from other animals such as wallabies and wombats.",
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "70 cm",
    "10 kg",
    "Tasmania"
)

let kookaburra = new Animals (
    "Kookaburra",
    "/Images/kokkaburra.webp",
    "Birds",
    "20 years",
    "Insects and small animals including snakes, frogs, and lizards",
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    "43 cm",
    "300g",
    "Australia wide"
)

let yellowtailedblackcockatoo = new Animals (
    "Yellow-tailed Black Cockatoo",
    "/Images/yellowtailedblackcockatoo.jpeg",
    "Birds",
    "41 years",
    "Fruit, seeds, and other plant material",
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia, and Tasmania) have more prominent scalloping.",
    "65 cm",
    "900 grams",
    "SE Australia"
)

let cassowary = new Animals (
    "Cassowary",
    "/Images/cassowary.jpeg",
    "Birds",
    "20 years",
    "Plant matter like fruit, insects, and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
    "1.7m",
    "44kg",
    "Queensland"
)

let hawksbillturtle = new Animals (
    "Hawksbill Turtle",
    "/Images/hawksbillturtle.jpeg",
    "Reptiles",
    "50 years",
    "Other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown, or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80cm (carapace)",
    "50 kg",
    "Tropical coasts of Queensland, Northern Territory, and Western Australia."
)

let perentie = new Animals (
    "Perentie",
    "/Images/perentie.jpeg",
    "Reptiles",
    "20 years",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards, and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    "20 kg",
    "Deserts"
)

let frillneckedlizard = new Animals (
    "Frill-necked Lizard",
    "/Images/frillneckedlizard.jpeg",
    "Reptiles",
    "20 years",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90 cm",
    "1 kg",
    "Northern Australia"
)

export const mammals = [echidna, quokka, tasmaniandevil]
export const birds = [kookaburra, yellowtailedblackcockatoo, cassowary]
export const reptiles = [hawksbillturtle, perentie, frillneckedlizard]
export const animals = [...birds, ...mammals, ...reptiles]