const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const clubs = {
    'arsenal':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/160px-Arsenal_FC.svg.png',
        'fullName': 'The Arsenal Football Club',
        'nickname': 'The Gunners',
        'homePitch': 'Emirates Stadium',
        'location': 'London, England',
        'rivals' : 'Tottenham Hotspur'
    },
    'aston villa':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/130px-Aston_Villa_FC_crest_%282016%29.svg.png',
        'fullName': 'Aston Villa Football Club',
        'nickname': 'The Lions',
        'homePitch': 'Villa Park',
        'location': 'Birmingham, England',
        'rivals' : 'Birmingham City'
    },
    'brentford':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/180px-Brentford_FC_crest.svg.png',
        'fullName': 'Brentford Football Club',
        'nickname': 'The Bees',
        'homePitch': 'Brentford Community Stadium',
        'location': 'London, England',
        'rivals' : 'Queens Park Rangers'
    },
    'bournemouth':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/150px-AFC_Bournemouth_%282013%29.svg.png',
        'fullName': 'AFC Bournemouth',
        'nickname': 'The Cherries',
        'homePitch': 'Vitality Stadium',
        'location': 'Dorset, England',
        'rivals' : 'Southampton'
    },
    'brighton & hove albion':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/200px-Brighton_%26_Hove_Albion_logo.svg.png',
        'fullName': 'Brighton & Hove Albion Football Club',
        'nickname': 'The Seagulls',
        'homePitch': 'Falmer Stadium',
        'location': 'East Sussex, England',
        'rivals' : 'Crystal Palace'
    },
    'chelsea':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/180px-Chelsea_FC.svg.png',
        'fullName': 'Chelsea Football Club',
        'nickname': 'The Blues',
        'homePitch': 'Stamford Bridge',
        'location': 'West London, England',
        'rivals' : 'Tottenham Hotspur'
    },
    'crystal palace':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/160px-Crystal_Palace_FC_logo.svg.png',
        'fullName': 'Crystal Palace Football Club',
        'nickname': 'The Eagles',
        'homePitch': 'Selhurst Park',
        'location': 'South London, England',
        'rivals' : 'Brighton & Hove Albion'
    },
    'everton':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/180px-Everton_FC_logo.svg.png',
        'fullName': 'Everton Football Club',
        'nickname': 'The Toffees',
        'homePitch': 'Goodison Park',
        'location': 'Liverpool, England',
        'rivals' : 'Liverpool F.C.'
    },
    'fullham':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/140px-Fulham_FC_%28shield%29.svg.png',
        'fullName': 'Fulham Football Club',
        'nickname': 'The Cottagers',
        'homePitch': 'Craven Cottage',
        'location': 'West London, England',
        'rivals' : 'Chelsea'
    },
    'leeds united':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/160px-Leeds_United_F.C._logo.svg.png',
        'fullName': 'Leeds United Football Club',
        'nickname': 'The Peacocks',
        'homePitch': 'Elland Road',
        'location': 'Leeds, England',
        'rivals' : 'Manchester United'
    },
    'leicester city':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/160px-Leeds_United_F.C._logo.svg.png',
        'fullName': 'Leicester City Football Club',
        'nickname': 'The Foxes',
        'homePitch': 'King Power Stadium',
        'location': 'East Midlands, England',
        'rivals' : 'Derby County'
    },
    'liverpool':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png',
        'fullName': 'Liverpool Football Club',
        'nickname': 'The Reds',
        'homePitch': 'Anfield',
        'location': 'Liverpool, England',
        'rivals' : 'Everton'
    },
    'manchester city':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png',
        'fullName': 'Manchester City Football Club',
        'nickname': 'City',
        'homePitch': 'City of Manchester Stadium',
        'location': 'Manchester, England',
        'rivals' : 'Manchester United'
    },
    'manchester united':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/190px-Manchester_United_FC_crest.svg.png',
        'fullName': 'Manchester United Football Club',
        'nickname': 'The Red Devils',
        'homePitch': 'Old Trafford',
        'location': 'Manchester, England',
        'rivals' : 'Manchester City'
    },
    'newcastle':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/200px-Newcastle_United_Logo.svg.png',
        'fullName': 'Newcastle United Football Club',
        'nickname': 'The Magpies',
        'homePitch': 'St James\' Park',
        'location': 'Newcastle, England',
        'rivals' : 'Sunderland'
    },
    'nottingham forest':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/100px-Nottingham_Forest_F.C._logo.svg.png',
        'fullName': 'Nottingham Forest Football Club',
        'nickname': 'Forest',
        'homePitch': 'City Ground',
        'location': 'Nottinghamshire, England',
        'rivals' : 'Derby County'
    },
    'southampton':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/170px-FC_Southampton.svg.png',
        'fullName': 'Southampton Football Club',
        'nickname': 'The Saints',
        'homePitch': 'St Mary\'s Stadium',
        'location': 'Southampton, England',
        'rivals' : 'Portsmouth'
    },
    'tottenham':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/120px-Tottenham_Hotspur.svg.png',
        'fullName': 'Tottenham Hotspur Football Club',
        'nickname': 'Spurs',
        'homePitch': 'Tottenham Hotspur Stadium',
        'location': 'London, England',
        'rivals' : 'Arsenal'
    },
    'west ham':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/160px-West_Ham_United_FC_logo.svg.png',
        'fullName': 'West Ham United Football Club',
        'nickname': 'The Hammers',
        'homePitch': 'London Stadium',
        'location': 'East London, England',
        'rivals' : 'Millwall F.C.'
    },
    'wolverhampton':{
        'image':'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/180px-Wolverhampton_Wanderers.svg.png',
        'fullName': 'Wolverhampton Wanderers Football Club',
        'nickname': 'The Wanderers',
        'homePitch': 'Molineux Stadium',
        'location': 'Wolverhampton, England',
        'rivals' : 'West Bromwich Albion'
    }
    
    
}

app.get('/',  (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:clubName', (request, response) => {
    const clubsName = request.params.clubName.toLowerCase()
    if(clubs[clubsName]){
        response.json(clubs[clubsName])
    }else{
        response.json(clubs['everton'])
    }
})
app.listen(PORT, () => {
    console.log('GET READYYYYY')
} )