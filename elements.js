
//ELEMENTS
var oxygen = {
    imgsrc:"o.png",
    anum:8,
    mass:8,
    fact:"Because water molecules contain Oxygen, Oxygen makes up most of the mass of all living things!",
         factsrc:"http://www.softschools.com/facts/periodic_table/oxygen_facts/181/",
    width:"76%",
    name:"Oxygen"
    };

var hydrogen = {
    imgsrc:"h.png",
    anum:1,
    mass:1,
    fact:"Hydrogen is the most abundant chemical element in the universe.",
        factsrc:"http://www.softschools.com/facts/periodic_table/hydrogen_facts/177/",
    width:"60%",
    name:"Hydrogen"
    };

var carbon = {
    imgsrc:"c.png",
    anum:6,
    mass:12,
    fact:"Carbon is known to form around 10,000,000 different compounds!",
        factsrc:"http://www.softschools.com/facts/periodic_table/carbon_facts/183/",
    width: "85%",
    name:"Carbon"
    };

var nitrogen = {
    imgsrc:"n.png",
    anum:7,
    mass:14,
    fact:"Nitrogen is required to create amino acids, DNA, and RNA. Your body is about 3% Nitrogen!",
        factsrc:"http://www.softschools.com/facts/periodic_table/nitrogen_facts/182/",
    width:"77.5%",
    name:"Nitrogen"
    };

var array = [oxygen, hydrogen, carbon, nitrogen];

//MOLECULES
var water = {
    recipe: [hydrogen, hydrogen, oxygen],
    imgsrc:"water.png",
    formula: "H2O",
    mass:18,
    fact: "Every day, we lose over one cup of water as we exhale.",
        factsrc:"https://www.seametrics.com/blog/water-facts/",
    name: "Water"
};

var hydrogenPeroxide = {
    recipe: [hydrogen, hydrogen, oxygen, oxygen],
    imgsrc: "hydroperox.png",
    formula: "H2O2",
    mass: 34,
    fact: "Your body naturally produces Hydrogen Peroxide to fight bacteria and infections.",
        factsrc: "https://puroxi.com/interesting-facts-about-hydrogen-peroxide/",
    name: "Hydrogen Peroxide"
};

var carbonDioxide = {
    recipe: [carbon, oxygen, oxygen],
    imgsrc: "carbondioxide.png",
    formula: "CO2",
    mass: 44,
    fact: "Carbon Dioxide has no taste, color, or smell.",
        factsrc:"https://www.analoxsensortechnology.com/blog/2017/06/22/ten-interesting-facts-carbon-dioxide-humble-carbon-dioxide-monitor/",
    name: "Carbon Dioxide"
};

var carbonMonoxide = {
    recipe: [carbon, oxygen],
    imgsrc: "carbonmonoxide.png",
    formula: "CO",
    mass: 28,
    fact:"In high concentrations, Carbon Monoxixe can kill within minutes.",
        factsrc: "https://www.grainger.com/content/qt-236-carbon-monoxide-facts",
    name: "Carbon Monoxide"
};

var methane = {
    recipe: [carbon, hydrogen, hydrogen, hydrogen, hydrogen],
    imgsrc: "methane.png",
    formula: "CH4",
    mass: 16,
    fact: "Methane ranks amongst the worst greenhouse gases.",
        factsrc: "http://www.edu-resource.com/facts-about-methane.html",
    name: "Methane"
};

var ethane = {
    recipe: [carbon, carbon, hydrogen, hydrogen, hydrogen, hydrogen, hydrogen, hydrogen],
    imgsrc: "ethane.png",
    formula: "C2H6",
    mass: 30,
    fact: "At room temperature, ethane can explode. However, when in its liquid state, ethane can cause serious frostbite.",
        factsrc: "https://wiki.kidzsearch.com/wiki/Ethane",
    name: "Ethane"
};

var formaldehyde = {
    recipe: [hydrogen, hydrogen, carbon, oxygen],
    imgsrc: "formaldehyde.png",
    formula: "H2CO",
    mass: 30,
    fact: "Formaldehyde is mainly used to make disinfectants, dyes, perservatives, and explosives.",
        factsrc: "https://wiki.kidzsearch.com/wiki/Formaldehyde",
    name: "Formaldehyde"
};

var ammonia = {
    recipe: [nitrogen, hydrogen, hydrogen],
    formula: "NH3",
};

var hydrazine = {
    recipe: [nitrogen, nitrogen, hydrogen, hydrogen, hydrogen, hydrogen],
    formula: "N2H4",
};

var dinitrogenMonoxide = {
    recipe: [nitrogen, nitrogen, oxygen],
    formula: "N2O",
};

var ethanol = {
    recipe: [carbon, carbon, hydrogen, hydrogen, hydrogen, hydrogen, hydrogen, hydrogen, oxygen],
    formula: "C2H6O",
};

var formicAcid = {
    recipe: [carbon, hydrogen. hydrogen, oxygen, oxygen],
    formula: "CH2O2",
};

var methanol = {
    recipe: [carbon, hydrogen, hydrogen, hydrogen, oxygen, hydrogen],
    formula: "CH3OH",

};

var molecularHydrogen = {
    recipe: [hydrogen, hydrogen],
    formula: "H2",
};

var molecualrNitrogen = {
    recipe: [nitrogen, nitrogen],
    formula: "N2",
};

var molecularOxygen = {
    recipe: [oxygen, oxygen],
    formula: "O2",
};

var ozone = {
    recipe: [oxygen, oxygen, oxygen],
    formula: "O3",
};

var urea = {
<<<<<<< HEAD
    recipe: [nitrogen, hydrogen, hydrogen, carbon, oxygen, nitrogen, hydrogen, hydrogen]
    formula: "NH2CONH2",
=======
    recipe: [nitrogen, hydrogen, hydrogen, carbon, oxygen, nitrogen, hydrogen, hydrogen],
    formula: "NH2CONH2"
>>>>>>> 049174f0b491e77fdb54e718f0759a8dff392070
};

var molecules = [water, hydrogenPeroxide, carbonDioxide, carbonMonoxide, methane, ethane, formaldehyde, ammonia, hydrazine, dinitrogenMonoxide, ethanol, formicAcid, methanol, molecualrNitrogen, molecularHydrogen, molecularOxygen, oxone, urea];