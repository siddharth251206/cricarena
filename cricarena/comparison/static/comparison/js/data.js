const teams = [
    {
        id: 'csk',
        name: 'Chennai Super Kings',
        shortName: 'CSK',
        color: '#FFF100',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/5G8eFjkPKNalIgL2FOtovg_48x48.png'
    },
    {
        id: 'dc',
        name: 'Delhi Capitals',
        shortName: 'DC',
        color: '#1E90FF',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/HzUX6_c8j7pwBCetmct2FQ_48x48.png'
    },
    {
        id: 'gt',
        name: 'Gujarat Titans',
        shortName: 'GT',
        color: '#D4AF37',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/aTE8G7q-OcAobWvDd6sizQ_48x48.png'
    },
    {
        id: 'kkr',
        name: 'Kolkata Knight Riders',
        shortName: 'KKR',
        color: '#2E0854',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/eDkEYCyMSAHSQFjQNOQF1w_48x48.png'
    },
    {
        id: 'lsg',
        name: 'Lucknow Super Giants',
        shortName: 'LSG',
        color: '#00FFFF',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/82AP_EDcTMdcVlCqM4NgMg_48x48.png'
    },
    {
        id: 'mi',
        name: 'Mumbai Indians',
        shortName: 'MI',
        color: '#0000FF',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/HmiWb77BmJDs6sHvn77v_Q_48x48.png'
    },
    {
        id: 'pbks',
        name: 'Punjab Kings',
        shortName: 'PBKS',
        color: '#FF474C',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/XUAb4iA3XozYbH_cXQCryQ_48x48.png'
    },
    {
        id: 'rr',
        name: 'Rajasthan Royals',
        shortName: 'RR',
        color: '#FC4CFC',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/GqIU6xhQAnCpy_Cbr2LZRA_48x48.png'
    },
    {
        id: 'rcb',
        name: 'Royal Challengers Bangalore',
        shortName: 'RCB',
        color: '#8B0000',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/xUS54-BA0dFZPMtbCiHkzQ_48x48.png'
    },
    {
        id: 'srh',
        name: 'Sunrisers Hyderabad',
        shortName: 'SRH',
        color: '#FF6600',
        logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/W0OCBYc05c5MFMrctF62kg_48x48.png'
    }
];

const players = [
    // CSK Players
    {
        id: 'dhoni',
        name: 'MS Dhoni',
        team: 'csk',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 278,
                runs: 5439,
                average: 38.3,
                strikeRate: 137.45,
                fifties: 24,
                hundreds: 0,
                highestScore: 84
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Urvil Patel',
        team: 'csk',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 68,
                average: 22.67,
                strikeRate: 212.5,
                fifties: 0,
                hundreds: 0,
                highestScore: 37
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'nagarkoti',
        name: 'Kamlesh Nagarkoti',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 12,
                runs: 22,
                average: 5.5,
                strikeRate: 66.67,
                fifties: 0,
                hundreds: 0,
                highestScore: 8
            },
            bowling: {
                wickets: 5,
                average: 57,
                economy: 9.5,
                bestFigures: '2/13',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Shreyas Gopal',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 52,
                runs: 180,
                average: 12.86,
                strikeRate: 106.51,
                fifties: 0,
                hundreds: 0,
                highestScore: 24
            },
            bowling: {
                wickets: 52,
                average: 25.94,
                economy: 8.17,
                bestFigures: '4/16',
                fiveWickets: 0
            },
            fielding: {
                catches: 12,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Nathan Ellis',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 17,
                runs: 19,
                average: 4.75,
                strikeRate: 76,
                fifties: 0,
                hundreds: 0,
                highestScore: 12
            },
            bowling: {
                wickets: 19,
                average: 29.16,
                economy: 8.66,
                bestFigures: '4/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Deepak Hooda',
        team: 'csk',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 125,
                runs: 1496,
                strikeRate: 127.65,
                average: 17.6,
                hundreds: 0,
                fifties: 8,
                highestScore: 64
            },
            bowling: {
                wickets: 10,
                average: 54.6,
                economy: 8.64,
                bestFigures: '2/16',
                fiveWickets: 0
            },
            fielding: {
                catches: 59,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Vijay Shankar',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 78,
                runs: 1233,
                hundreds: 0,
                fifties: 7,
                strikeRate: 129.79,
                average: 26.23,
                highestScore: 69
            },
            bowling: {
                wickets: 9,
                average: 38.22,
                economy: 8.67,
                bestFigures: '2/19',
                fiveWickets: 0
            },
            fielding: {
                catches: 34,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Ravindra Jadeja',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 254,
                runs: 3260,
                hundreds: 0,
                fifties: 5,
                strikeRate: 130.24,
                average: 27.63,
                highestScore: 77
            },
            bowling: {
                wickets: 170,
                average: 30.52,
                economy: 7.67,
                bestFigures: '5/16',
                fiveWickets: 1
            },
            fielding: {
                catches: 109,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Syed Khaleel Ahmed',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 71,
                runs: 2,
                hundreds: 0,
                fifties: 0,
                strikeRate: 22.22,
                average: 0.4,
                highestScore: 1
            },
            bowling: {
                wickets: 89,
                average: 26.16,
                economy: 8.98,
                bestFigures: '3/21',
                fiveWickets: 0
            },
            fielding: {
                catches: 5,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Shivam Dube',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 79,
                runs: 1859,
                hundreds: 0,
                fifties: 10,
                strikeRate: 143.66,
                average: 30.48,
                highestScore: 95
            },
            bowling: {
                wickets: 5,
                average: 42.6,
                economy: 10.31,
                bestFigures: '2/15',
                fiveWickets: 0
            },
            fielding: {
                catches: 23,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Sam Curran',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 64,
                runs: 997,
                hundreds: 0,
                fifties: 6,
                strikeRate: 136.39,
                average: 24.93,
                highestScore: 88
            },
            bowling: {
                wickets: 59,
                average: 34.46,
                economy: 9.74,
                bestFigures: '4/11',
                fiveWickets: 0
            },
            fielding: {
                catches: 25,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Rahul Tripathi',
        team: 'csk',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 100,
                runs: 2291,
                hundreds: 0,
                fifties: 12,
                strikeRate: 137.85,
                average: 26.03,
                highestScore: 93
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 12,
                bestFigures: '0/12',
                fiveWickets: 0
            },
            fielding: {
                catches: 34,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Ravichandran Ashwin',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 221,
                runs: 833,
                hundreds: 0,
                fifties: 1,
                strikeRate: 118.16,
                average: 13.02,
                highestScore: 50
            },
            bowling: {
                wickets: 187,
                average: 30.23,
                economy: 7.2,
                bestFigures: '4/34',
                fiveWickets: 0
            },
            fielding: {
                catches: 52,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Devon Conway',
        team: 'csk',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 29,
                runs: 1080,
                hundreds: 0,
                fifties: 11,
                strikeRate: 139.72,
                average: 43.2,
                highestScore: 92
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 10,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Mukesh Choudhary',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 16,
                runs: 6,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 6,
                highestScore: 4
            },
            bowling: {
                wickets: 17,
                average: 30.71,
                economy: 9.94,
                bestFigures: '4/46',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Noor Ahmad',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 37,
                runs: 20,
                hundreds: 0,
                fifties: 0,
                strikeRate: 57.14,
                average: 2.5,
                highestScore: 7
            },
            bowling: {
                wickets: 48,
                average: 22.23,
                economy: 8.08,
                bestFigures: '4/18',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Matheesha Pathirana',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: { 
                matches: 0, 
                runs: 0, 
                average: 0, 
                strikeRate: 0, 
                fifties: 0, 
                hundreds: 0, 
                highestScore: 0 
            },
            bowling: {
                wickets: 47,
                average: 21.62,
                economy: 8.68,
                bestFigures: '4/28',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Shaik Rasheed',
        team: 'csk',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 5,
                runs: 71,
                hundreds: 0,
                fifties: 12,
                strikeRate: 112.7,
                average: 14.2,
                highestScore: 27
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Rachin Ravindra',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 18,
                runs: 413,
                hundreds: 0,
                fifties: 2,
                strikeRate: 143.9,
                average: 24.29,
                highestScore: 65
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 3.5,
                bestFigures: '0/3',
                fiveWickets: 0
            },
            fielding: {
                catches: 10,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Anshul Kamboj',
        team: 'csk',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 11,
                runs: 16,
                hundreds: 0,
                fifties: 0,
                strikeRate: 114.29,
                average: 8,
                highestScore: 5
            },
            bowling: {
                wickets: 10,
                average: 28.6,
                economy: 9.08,
                bestFigures: '3/13',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Jamie Overton',
        team: 'csk',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 15,
                hundreds: 0,
                fifties: 2,
                strikeRate: 214.29,
                average: 0,
                highestScore: 11
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 13.83,
                bestFigures: '0/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Ayush Mhatre',
        team: 'csk',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 7,
                runs: 240,
                hundreds: 0,
                fifties: 1,
                strikeRate: 188.98,
                average: 34.29,
                highestScore: 94
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    // DC Players
    {
        id: 'jadeja',
        name: 'Mustafizur Rahman',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 60,
                runs: 13,
                hundreds: 0,
                fifties: 0,
                strikeRate: 54.17,
                average: 6.5,
                highestScore: 8
            },
            bowling: {
                wickets: 65,
                average: 28.45,
                economy: 8.13,
                bestFigures: '4/29',
                fiveWickets: 0
            },
            fielding: {
                catches: 7,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Karun Nair',
        team: 'dc',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 84,
                runs: 1694,
                hundreds: 0,
                fifties: 11,
                strikeRate: 131.73,
                average: 23.86,
                highestScore: 89
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 27,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Donovan Ferreira',
        team: 'dc',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 9,
                hundreds: 0,
                fifties: 2,
                strikeRate: 64.29,
                average: 3,
                highestScore: 7
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Sameer Rizvi',
        team: 'dc',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 13,
                runs: 172,
                hundreds: 0,
                fifties: 1,
                strikeRate: 140.98,
                average: 24.57,
                highestScore: 58
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 6,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Faf du Plessis',
        team: 'dc',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 154,
                runs: 4773,
                hundreds: 0,
                fifties: 39,
                strikeRate: 135.79,
                average: 35.1,
                highestScore: 96
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 16,
                bestFigures: '0/16',
                fiveWickets: 0
            },
            fielding: {
                catches: 85,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'KL Rahul',
        team: 'dc',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 145,
                runs: 5222,
                hundreds: 5,
                fifties: 40,
                strikeRate: 136.03,
                average: 46.21,
                highestScore: 132
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 81,
                stumpings: 7
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Axar Patel',
        team: 'dc',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 162,
                runs: 1916,
                hundreds: 0,
                fifties: 3,
                strikeRate: 133.99,
                average: 22.02,
                highestScore: 66
            },
            bowling: {
                wickets: 128,
                average: 31.61,
                economy: 7.35,
                bestFigures: '4/21',
                fiveWickets: 0
            },
            fielding: {
                catches: 77,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'T. Natarajan',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 63,
                runs: 3,
                hundreds: 0,
                fifties: 0,
                strikeRate: 60,
                average: 0,
                highestScore: 3
            },
            bowling: {
                wickets: 67,
                average: 30.12,
                economy: 8.94,
                bestFigures: '4/19',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Mohit Sharma',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 120,
                runs: 125,
                hundreds: 0,
                fifties: 0,
                strikeRate: 91.91,
                average: 6.94,
                highestScore: 21
            },
            bowling: {
                wickets: 134,
                average: 26.22,
                economy: 8.77,
                bestFigures: '5/10',
                fiveWickets: 1
            },
            fielding: {
                catches: 29,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Darshan Nalkande',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 6,
                runs: 12,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 6,
                highestScore: 12
            },
            bowling: {
                wickets: 6,
                average: 24.67,
                economy: 10.57,
                bestFigures: '2/21',
                fiveWickets: 0
            },
            fielding: {
                catches: 17,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Kuldeep Yadav',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 98,
                runs: 201,
                hundreds: 0,
                fifties: 0,
                strikeRate: 86.64,
                average: 13.4,
                highestScore: 35
            },
            bowling: {
                wickets: 102,
                average: 26.95,
                economy: 8.04,
                bestFigures: '4/14',
                fiveWickets: 0
            },
            fielding: {
                catches: 20,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Dushmantha Chameera',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 19,
                runs: 53,
                hundreds: 0,
                fifties: 0,
                strikeRate: 126.19,
                average: 13.25,
                highestScore: 17
            },
            bowling: {
                wickets: 13,
                average: 46.38,
                economy: 9.73,
                bestFigures: '2/17',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Mitchell Starc',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 52,
                runs: 111,
                hundreds: 0,
                fifties: 0,
                strikeRate: 93.28,
                average: 10.09,
                highestScore: 29
            },
            bowling: {
                wickets: 64,
                average: 23.47,
                economy: 8.61,
                bestFigures: '5/35',
                fiveWickets: 1
            },
            fielding: {
                catches: 29,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Tristan Stubbs',
        team: 'dc',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 32,
                runs: 705,
                hundreds: 0,
                fifties: 3,
                strikeRate: 163.19,
                average: 41.47,
                highestScore: 71
            },
            bowling: {
                wickets: 4,
                average: 17.25,
                economy: 11.5,
                bestFigures: '2/11',
                fiveWickets: 0
            },
            fielding: {
                catches: 17,
                stumpings: 1
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Mukesh Kumar',
        team: 'dc',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 32,
                runs: 10,
                hundreds: 0,
                fifties: 0,
                strikeRate: 55.56,
                average: 10,
                highestScore: 6
            },
            bowling: {
                wickets: 36,
                average: 30.61,
                economy: 10.4,
                bestFigures: '4/33',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Vipraj Nigam',
        team: 'dc',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 14,
                runs: 142,
                hundreds: 0,
                fifties: 0,
                strikeRate: 179.75,
                average: 20.29,
                highestScore: 39
            },
            bowling: {
                wickets: 11,
                average: 32.36,
                economy: 9.13,
                bestFigures: '2/18',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Abhishek Porel',
        team: 'dc',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 31,
                runs: 661,
                hundreds: 0,
                fifties: 3,
                strikeRate: 149.89,
                average: 25.42,
                highestScore: 65
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Ashutosh Sharma',
        team: 'dc',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 24,
                runs: 393,
                hundreds: 0,
                fifties: 2,
                strikeRate: 163.75,
                average: 28.07,
                highestScore: 66
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Madhav Tiwari',
        team: 'dc',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 3,
                hundreds: 0,
                fifties: 0,
                strikeRate: 75,
                average: 3,
                highestScore: 3
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 0,
                bestFigures: '0/0',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    //GT Players
    {
        id: 'jadeja',
        name: 'Kulwant Khejroliya',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 8,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 6,
                average: 41.17,
                economy: 10.66,
                bestFigures: '2/33',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Sai Kishore',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 25,
                runs: 18,
                hundreds: 0,
                fifties: 0,
                strikeRate: 112.5,
                average: 4.5,
                highestScore: 13
            },
            bowling: {
                wickets: 32,
                average: 20.34,
                economy: 8.86,
                bestFigures: '4/33',
                fiveWickets: 0
            },
            fielding: {
                catches: 10,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Sai Sudarshan',
        team: 'gt',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 40,
                runs: 1793,
                hundreds: 2,
                fifties: 12,
                strikeRate: 145.89,
                average: 49.81,
                highestScore: 108
            },
            fielding: {
                catches: 10,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Arshad Khan',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 19,
                runs: 124,
                hundreds: 0,
                fifties: 1,
                strikeRate: 140.91,
                average: 20.67,
                highestScore: 58
            },
            bowling: {
                wickets: 12,
                average: 43.42,
                economy: 11.49,
                bestFigures: '3/39',
                fiveWickets: 0
            },
            fielding: {
                catches: 7,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Gurnoor Singh Brar',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            bowling: {
                wickets: 0,
                average: 0,
                economy: 14,
                bestFigures: '0/42',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Dasun Shanaka',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 26,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 13,
                highestScore: 17
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Manav Suthar',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 1,
                hundreds: 0,
                fifties: 0,
                strikeRate: 50,
                average: 1,
                highestScore: 1
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 13,
                bestFigures: '0/26',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Anuj Rawat',
        team: 'gt',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 24,
                runs: 318,
                hundreds: 0,
                fifties: 1,
                strikeRate: 119.1,
                average: 19.88,
                highestScore: 66
            },
            fielding: {
                catches: 18,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Rashid Khan',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 136,
                runs: 585,
                hundreds: 0,
                fifties: 1,
                strikeRate: 160.27,
                average: 13.93,
                highestScore: 79
            },
            bowling: {
                wickets: 158,
                average: 23.84,
                economy: 7.09,
                bestFigures: '4/24',
                fiveWickets: 0
            },
            fielding: {
                catches: 49,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Kagiso Rabada',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 84,
                runs: 215,
                hundreds: 0,
                fifties: 0,
                strikeRate: 106.97,
                average: 11.32,
                highestScore: 44
            },
            bowling: {
                wickets: 119,
                average: 22.96,
                economy: 8.62,
                bestFigures: '4/21',
                fiveWickets: 0
            },
            fielding: {
                catches: 30,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Shahrukh Khan',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 55,
                runs: 732,
                hundreds: 0,
                fifties: 2,
                strikeRate: 149.08,
                average: 21.53,
                highestScore: 58
            },
            bowling: {
                wickets: 1,
                average: 28,
                economy: 9.33,
                bestFigures: '1/13',
                fiveWickets: 0
            },
            fielding: {
                catches: 25,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Washington Sundar',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 66,
                runs: 511,
                hundreds: 0,
                fifties: 0,
                strikeRate: 126.17,
                average: 15.48,
                highestScore: 49
            },
            bowling: {
                wickets: 39,
                average: 36.82,
                economy: 7.7,
                bestFigures: '3/16',
                fiveWickets: 0
            },
            fielding: {
                catches: 15,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Jayant Yadav',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 20,
                runs: 40,
                hundreds: 0,
                fifties: 0,
                strikeRate: 111.11,
                average: 10,
                highestScore: 23
            },
            bowling: {
                wickets: 8,
                average: 55.63,
                economy: 6.85,
                bestFigures: '1/8',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Ishant Sharma',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 117,
                runs: 57,
                hundreds: 0,
                fifties: 0,
                strikeRate: 82.61,
                average: 9.5,
                highestScore: 10
            },
            bowling: {
                wickets: 97,
                average: 34.84,
                economy: 8.36,
                bestFigures: '5/12',
                fiveWickets: 1
            },
            fielding: {
                catches: 21,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Shubman Gill',
        team: 'gt',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 118,
                runs: 3866,
                hundreds: 4,
                fifties: 26,
                strikeRate: 138.72,
                average: 39.45,
                highestScore: 129
            },
            fielding: {
                catches: 45,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Mahipal Lomror',
        team: 'gt',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 40,
                runs: 527,
                hundreds: 0,
                fifties: 1,
                strikeRate: 141.29,
                average: 18.17,
                highestScore: 54
            },
            bowling: {
                wickets: 1,
                average: 127,
                economy: 8.47,
                bestFigures: '1/22',
                fiveWickets: 0
            },
            fielding: {
                catches: 11,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Rahul Tewatia',
        team: 'gt',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 108,
                runs: 1112,
                hundreds: 0,
                fifties: 1,
                strikeRate: 137.11,
                average: 23.17,
                highestScore: 53
            },
            bowling: {
                wickets: 32,
                average: 34.72,
                economy: 7.91,
                bestFigures: '3/18',
                fiveWickets: 0
            },
            fielding: {
                catches: 45,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Prasidh Krishna',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 66,
                runs: 9,
                hundreds: 0,
                fifties: 0,
                strikeRate: 37.5,
                average: 3,
                highestScore: 4
            },
            bowling: {
                wickets: 74,
                average: 29.61,
                economy: 8.77,
                bestFigures: '4/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 14,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Mohammed Siraj',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 108,
                runs: 112,
                hundreds: 0,
                fifties: 0,
                strikeRate: 91.06,
                average: 11.2,
                highestScore: 14
            },
            bowling: {
                wickets: 109,
                average: 30.72,
                economy: 8.74,
                bestFigures: '4/17',
                fiveWickets: 0
            },
            fielding: {
                catches: 34,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Sherfane Rutherford',
        team: 'gt',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 23,
                runs: 397,
                hundreds: 0,
                fifties: 0,
                strikeRate: 137.37,
                average: 24.81,
                highestScore: 46
            },
            bowling: {
                wickets: 1,
                average: 59,
                economy: 8.63,
                bestFigures: '1/6',
                fiveWickets: 0
            },
            fielding: {
                catches: 6,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Gerald Coetzee',
        team: 'gt',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 14,
                runs: 31,
                hundreds: 0,
                fifties: 0,
                strikeRate: 93.94,
                average: 5.17,
                highestScore: 12
            },
            bowling: {
                wickets: 15,
                average: 31.47,
                economy: 10.37,
                bestFigures: '4/34',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Kumar Kushagra',
        team: 'gt',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 4,
                runs: 3,
                hundreds: 0,
                fifties: 0,
                strikeRate: 42.86,
                average: 1,
                highestScore: 2
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'jadeja',
        name: 'Karim Janat',
        team: 'gt',
        role: 'All-rounder',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 30,
                bestFigures: '0/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Kusal Mendis',
        team: 'gt',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 20,
                hundreds: 0,
                fifties: 0,
                strikeRate: 200,
                average: 20,
                highestScore: 20
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    // KKR Players
    {
        id: 'bumrah',
        name: 'Varun chakaravarthy',
        team: 'kkr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 84,
                runs: 26,
                hundreds: 0,
                fifties: 0,
                strikeRate: 55.32,
                average: 6.5,
                highestScore: 10
            },
            bowling: {
                wickets: 100,
                average: 23.85,
                economy: 7.58,
                bestFigures: '5/20',
                fiveWickets: 1
            },
            fielding: {
                catches: 16,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Moeen Ali',
        team: 'kkr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 73,
                runs: 1167,
                hundreds: 0,
                fifties: 6,
                strikeRate: 139.76,
                average: 22.02,
                highestScore: 93
            },
            bowling: {
                wickets: 41,
                average: 25.1,
                economy: 7.23,
                bestFigures: '4/26',
                fiveWickets: 0
            },
            fielding: {
                catches: 24,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Venkatesh Iyer',
        team: 'kkr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 62,
                runs: 1468,
                hundreds: 1,
                fifties: 12,
                strikeRate: 137.32,
                average: 29.96,
                highestScore: 104
            },
            bowling: {
                wickets: 3,
                average: 47.67,
                economy: 10.59,
                bestFigures: '2/29',
                fiveWickets: 0
            },
            fielding: {
                catches: 22,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Quinton De Cock',
        team: 'kkr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 115,
                runs: 3309,
                hundreds: 2,
                fifties: 24,
                strikeRate: 134.4,
                average: 30.93,
                highestScore: 140
            },
            fielding: {
                catches: 73,
                stumpings: 16
            },
        }
    },
    {
        id: 'kohli',
        name: 'Ajinkya Rahane',
        team: 'kkr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 198,
                runs: 5032,
                hundreds: 2,
                fifties: 33,
                strikeRate: 125.02,
                average: 30.31,
                highestScore: 105
            },
            bowling: {
                wickets: 1,
                average: 5,
                economy: 5,
                bestFigures: '1/5',
                fiveWickets: 0
            },
            fielding: {
                catches: 75,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Sunil Narine',
        team: 'kkr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 189,
                runs: 1780,
                hundreds: 1,
                fifties: 7,
                strikeRate: 166.51,
                average: 17.45,
                highestScore: 109
            },
            bowling: {
                wickets: 192,
                average: 25.64,
                economy: 6.8,
                bestFigures: '5/19',
                fiveWickets: 1
            },
            fielding: {
                catches: 36,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Anrich Nortje',
        team: 'kkr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 48,
                runs: 49,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 8.7,
                highestScore: 23
            },
            bowling: {
                wickets: 61,
                average: 27.16,
                economy: 9.07,
                bestFigures: '3/33',
                fiveWickets: 0
            },
            fielding: {
                catches: 11,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Andre Russell',
        team: 'kkr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 140,
                runs: 2651,
                hundreds: 0,
                fifties: 12,
                strikeRate: 174.18,
                average: 28.51,
                highestScore: 88
            },
            bowling: {
                wickets: 122,
                average: 23.47,
                economy: 9.51,
                bestFigures: '5/15',
                fiveWickets: 1
            },
            fielding: {
                catches: 40,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Manish Pandey',
        team: 'kkr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 174,
                runs: 3942,
                hundreds: 1,
                fifties: 22,
                strikeRate: 121.52,
                average: 29.42,
                highestScore: 114
            },
            fielding: {
                catches: 85,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Mayank Markande',
        team: 'kkr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 37,
                runs: 48,
                hundreds: 0,
                fifties: 0,
                strikeRate: 114.29,
                average: 12,
                highestScore: 18
            },
            bowling: {
                wickets: 37,
                average: 28.89,
                economy: 8.91,
                bestFigures: '4/15',
                fiveWickets: 0
            },
            fielding: {
                catches: 8,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Anukul Roy',
        team: 'kkr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 12,
                runs: 26,
                hundreds: 0,
                fifties: 0,
                strikeRate: 104,
                average: 6.5,
                highestScore: 13
            },
            bowling: {
                wickets: 6,
                average: 36.33,
                economy: 8.18,
                bestFigures: '2/19',
                fiveWickets: 0
            },
            fielding: {
                catches: 6,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Rinku Singh',
        team: 'kkr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 59,
                runs: 1099,
                hundreds: 0,
                fifties: 4,
                strikeRate: 145.18,
                average: 30.53,
                highestScore: 67
            },
            fielding: {
                catches: 41,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Vaibhav Arora',
        team: 'kkr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 32,
                runs: 9,
                hundreds: 0,
                fifties: 0,
                strikeRate: 37.5,
                average: 2.25,
                highestScore: 2
            },
            bowling: {
                wickets: 36,
                average: 28.22,
                economy: 9.55,
                bestFigures: '3/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 9,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Ramandeep Singh',
        team: 'kkr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 31,
                runs: 217,
                hundreds: 0,
                fifties: 0,
                strikeRate: 158.39,
                average: 19.73,
                highestScore: 35
            },
            bowling: {
                wickets: 6,
                average: 10.5,
                economy: 9.45,
                bestFigures: '3/20',
                fiveWickets: 0
            },
            fielding: {
                catches: 14,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Rahmanullah Gurbaz',
        team: 'kkr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 19,
                runs: 363,
                hundreds: 0,
                fifties: 2,
                strikeRate: 134.94,
                average: 21.94,
                highestScore: 81
            },
            fielding: {
                catches: 17,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Harshit Rana',
        team: 'kkr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 34,
                runs: 59,
                hundreds: 0,
                fifties: 0,
                strikeRate: 105.36,
                average: 9.83,
                highestScore: 34
            },
            bowling: {
                wickets: 40,
                average: 25.73,
                economy: 9.51,
                bestFigures: '3/24',
                fiveWickets: 0
            },
            fielding: {
                catches: 12,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Spencer Johnson',
        team: 'kkr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 9,
                runs: 8,
                hundreds: 0,
                fifties: 0,
                strikeRate: 72.73,
                average: 0,
                highestScore: 5
            },
            bowling: {
                wickets: 5,
                average: 56.8,
                economy: 10.39,
                bestFigures: '2/25',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Angkrish Raghuvanshi',
        team: 'kkr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 22,
                runs: 463,
                hundreds: 0,
                fifties: 2,
                strikeRate: 144.69,
                average: 28.94,
                highestScore: 54
            },
            fielding: {
                catches: 6,
                stumpings: 0
            },
        }
    },
    //lsg
    {
        id: 'russell',
        name: 'Shahbaz Ahamad',
        team: 'lsg',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 58,
                runs: 545,
                hundreds: 0,
                fifties: 1,
                strikeRate: 121.65,
                average: 18.69,
                highestScore: 59
            },
            bowling: {
                wickets: 22,
                average: 42.68,
                economy: 9.58,
                bestFigures: '3/7',
                fiveWickets: 0
            },
            fielding: {
                catches: 21,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Himmat Singh',
        team: 'lsg',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 0,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Rajvardhan Hangargekar',
        team: 'lsg',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            bowling: {
                wickets: 3,
                average: 20,
                economy: 10,
                bestFigures: '3/36',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Abdul Samad',
        team: 'lsg',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 63,
                runs: 741,
                hundreds: 0,
                fifties: 0,
                strikeRate: 151.84,
                average: 19.5,
                highestScore: 45
            },
            bowling: {
                wickets: 2,
                average: 59.5,
                economy: 12.75,
                bestFigures: '1/9',
                fiveWickets: 0
            },
            fielding: {
                catches: 31,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Ravi Bishnoi',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 77,
                runs: 45,
                hundreds: 0,
                fifties: 0,
                strikeRate: 68.18,
                average: 4.5,
                highestScore: 13
            },
            bowling: {
                wickets: 72,
                average: 30.96,
                economy: 8.22,
                bestFigures: '3/24',
                fiveWickets: 0
            },
            fielding: {
                catches: 26,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Akash Singh',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            bowling: {
                wickets: 9,
                average: 36.22,
                economy: 9.54,
                bestFigures: '2/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'David Miller',
        team: 'lsg',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 141,
                runs: 3077,
                hundreds: 1,
                fifties: 13,
                strikeRate: 138.6,
                average: 35.78,
                highestScore: 101
            },
            fielding: {
                catches: 85,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Nicholas Pooran',
        team: 'lsg',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 90,
                runs: 2293,
                hundreds: 0,
                fifties: 14,
                strikeRate: 168.98,
                average: 33.72,
                highestScore: 87
            },
            fielding: {
                catches: 40,
                stumpings: 4
            },
        }
    },
    {
        id: 'patel',
        name: 'Rishabh Pant',
        team: 'lsg',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 125,
                runs: 3553,
                hundreds: 2,
                fifties: 19,
                strikeRate: 147.61,
                average: 34.16,
                highestScore: 128
            },
            fielding: {
                catches: 80,
                stumpings: 24
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Avesh Khan',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 76,
                runs: 62,
                hundreds: 0,
                fifties: 0,
                strikeRate: 167.57,
                average: 20.67,
                highestScore: 19
            },
            bowling: {
                wickets: 87,
                average: 28.29,
                economy: 9.12,
                bestFigures: '4/24',
                fiveWickets: 0
            },
            fielding: {
                catches: 13,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Aiden Markram',
        team: 'lsg',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 57,
                runs: 1440,
                hundreds: 0,
                fifties: 10,
                strikeRate: 135.08,
                average: 31.3,
                highestScore: 68
            },
            bowling: {
                wickets: 6,
                average: 45.67,
                economy: 8.79,
                bestFigures: '2/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 32,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Mitchell Marsh',
        team: 'lsg',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 55,
                runs: 1292,
                hundreds: 1,
                fifties: 9,
                strikeRate: 142.92,
                average: 27.49,
                highestScore: 117
            },
            bowling: {
                wickets: 37,
                average: 21.49,
                economy: 8.52,
                bestFigures: '4/25',
                fiveWickets: 0
            },
            fielding: {
                catches: 11,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'M. Siddharth',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            bowling: {
                wickets: 3,
                average: 46,
                economy: 8.63,
                bestFigures: '2/39',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Akash Deep',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 14,
                runs: 25,
                hundreds: 0,
                fifties: 0,
                strikeRate: 178.57,
                average: 8.33,
                highestScore: 17
            },
            bowling: {
                wickets: 10,
                average: 54.8,
                economy: 11.83,
                bestFigures: '3/45',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Ayush Badoni',
        team: 'lsg',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 56,
                runs: 963,
                hundreds: 0,
                fifties: 6,
                strikeRate: 138.56,
                average: 26.75,
                highestScore: 74
            },
            bowling: {
                wickets: 4,
                average: 12.25,
                economy: 8.4,
                bestFigures: '2/4',
                fiveWickets: 0
            },
            fielding: {
                catches: 18,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Digvesh Singh',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 13,
                runs: 1,
                hundreds: 0,
                fifties: 0,
                strikeRate: 33.33,
                average: 1,
                highestScore: 1
            },
            bowling: {
                wickets: 14,
                average: 30.64,
                economy: 8.25,
                bestFigures: '2/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Arshin Kulkarni',
        team: 'lsg',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 2,
                runs: 9,
                hundreds: 0,
                fifties: 0,
                strikeRate: 112.5,
                average: 4.5,
                highestScore: 9
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Shamar Joseph',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 11.75,
                bestFigures: '0/47',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Prince Yadav',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 6,
                runs: 5,
                hundreds: 0,
                fifties: 0,
                strikeRate: 50,
                average: 0,
                highestScore: 4
            },
            bowling: {
                wickets: 3,
                average: 75,
                economy: 9.85,
                bestFigures: '1/29',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Matthew Breetzke',
        team: 'lsg',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 14,
                hundreds: 0,
                fifties: 0,
                strikeRate: 116.67,
                average: 14,
                highestScore: 14
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'William O Rourke',
        team: 'lsg',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 6,
                average: 22,
                economy: 12.77,
                bestFigures: '3/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    //PBKS Players
    {
        id: 'bumrah',
        name: 'Kyle Jamieson',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 13,
                runs: 65,
                hundreds: 0,
                fifties: 0,
                strikeRate: 108.83,
                average: 16.25,
                highestScore: 16
            },
            bowling: {
                wickets: 14,
                average: 29.71,
                economy: 9.67,
                bestFigures: '3/41',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Pravin Dubey',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 5,
                runs: 23,
                hundreds: 0,
                fifties: 0,
                strikeRate: 69.7,
                average: 23,
                highestScore: 16
            },
            bowling: {
                wickets: 2,
                average: 55.5,
                economy: 8.54,
                bestFigures: '1/19',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Vyshak Vijaykumar',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 16,
                runs: 14,
                hundreds: 0,
                fifties: 0,
                strikeRate: 116.67,
                average: 7,
                highestScore: 13
            },
            bowling: {
                wickets: 17,
                average: 33.8,
                economy: 10.38,
                bestFigures: '3/20',
                fiveWickets: 0
            },
            fielding: {
                catches: 5,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Suryansh Shedge',
        team: 'pbks',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 5,
                runs: 7,
                hundreds: 0,
                fifties: 0,
                strikeRate: 63.64,
                average: 2.33,
                highestScore: 4
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 13.33,
                bestFigures: '0/40',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Prabhsimran Singh',
        team: 'pbks',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 51,
                runs: 1305,
                hundreds: 1,
                fifties: 7,
                strikeRate: 151.92,
                average: 25.59,
                highestScore: 103
            },
            fielding: {
                catches: 6,
                stumpings: 1
            },
        }
    },
    {
        id: 'russell',
        name: 'Marcus Stoinis',
        team: 'pbks',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTByFzyjn5LAjIph-OYVvYzIY5OGLPcdev0HauRFizKMectSM5oCRpNWDhwv2oJdyfbUQ9u-5WelVzzyTS-a58Gvk8',
        stats: {
            batting: {
                matches: 109,
                runs: 2026,
                hundreds: 1,
                fifties: 9,
                strikeRate: 144.71,
                average: 28.14,
                highestScore: 124
            },
            bowling: {
                wickets: 44,
                average: 32.93,
                economy: 9.79,
                bestFigures: '4/15',
                fiveWickets: 0
            },
            fielding: {
                catches: 25,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Shreyas Iyer',
        team: 'pbks',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 133,
                runs: 3731,
                hundreds: 0,
                fifties: 27,
                strikeRate: 133.35,
                average: 34.55,
                highestScore: 97
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 7,
                bestFigures: '0/7',
                fiveWickets: 0
            },
            fielding: {
                catches: 56,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Marco Jansen',
        team: 'pbks',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 35,
                runs: 141,
                hundreds: 0,
                fifties: 0,
                strikeRate: 109.3,
                average: 12.82,
                highestScore: 34
            },
            bowling: {
                wickets: 36,
                average: 31.92,
                economy: 9.41,
                bestFigures: '3/17',
                fiveWickets: 0
            },
            fielding: {
                catches: 21,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Yuzvendra Chahal',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 174,
                runs: 37,
                hundreds: 0,
                fifties: 0,
                strikeRate: 43.02,
                average: 5.29,
                highestScore: 8
            },
            bowling: {
                wickets: 220,
                average: 22.87,
                economy: 7.96,
                bestFigures: '5/40',
                fiveWickets: 1
            },
            fielding: {
                catches: 32,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Harpreet Brar',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 49,
                runs: 244,
                hundreds: 0,
                fifties: 0,
                strikeRate: 120.2,
                average: 20.33,
                highestScore: 29
            },
            bowling: {
                wickets: 35,
                average: 31,
                economy: 8.03,
                bestFigures: '4/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 14,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Arshdeep Singh',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 82,
                runs: 31,
                hundreds: 0,
                fifties: 0,
                strikeRate: 67.39,
                average: 5.17,
                highestScore: 10
            },
            bowling: {
                wickets: 97,
                average: 26.49,
                economy: 9,
                bestFigures: '5/32',
                fiveWickets: 1
            },
            fielding: {
                catches: 16,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Vishnu Vinod',
        team: 'pbks',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 6,
                runs: 56,
                hundreds: 0,
                fifties: 0,
                strikeRate: 98.25,
                average: 9.33,
                highestScore: 30
            },
            fielding: {
                catches: 1,
                stumpings: 2
            },
        }
    },
    {
        id: 'kohli',
        name: 'Shashank Singh',
        team: 'pbks',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 41,
                runs: 773,
                hundreds: 0,
                fifties: 5,
                strikeRate: 157.76,
                average: 40.68,
                highestScore: 68
            },
            bowling: {
                wickets: 1,
                average: 52,
                economy: 10.4,
                bestFigures: '1/5',
                fiveWickets: 0
            },
            fielding: {
                catches: 17,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Kuldeep Sen',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 12,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 14,
                average: 27.64,
                economy: 9.63,
                bestFigures: '4/20',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Yash Thakur',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 21,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 25,
                average: 30.8,
                economy: 10.43,
                bestFigures: '5/30',
                fiveWickets: 1
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Azmatullah Omarzai',
        team: 'pbks',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 16,
                runs: 99,
                hundreds: 0,
                fifties: 0,
                strikeRate: 133.78,
                average: 12.38,
                highestScore: 21
            },
            bowling: {
                wickets: 12,
                average: 38.75,
                economy: 9.69,
                bestFigures: '2/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Xavier Bartlett',
        team: 'pbks',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 4,
                runs: 11,
                hundreds: 0,
                fifties: 0,
                strikeRate: 73.33,
                average: 11,
                highestScore: 11
            },
            bowling: {
                wickets: 2,
                average: 48,
                economy: 9.6,
                bestFigures: '1/26',
                fiveWickets: 0
            },
            fielding: {
                catches: 5,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Nehal Wadhera',
        team: 'pbks',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 36,
                runs: 719,
                hundreds: 0,
                fifties: 4,
                strikeRate: 142.94,
                average: 26.63,
                highestScore: 70
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 7.76,
                bestFigures: '0/9',
                fiveWickets: 0
            },
            fielding: {
                catches: 12,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Josh Inglis',
        team: 'pbks',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 11,
                runs: 278,
                hundreds: 0,
                fifties: 1,
                strikeRate: 162.57,
                average: 30.89,
                highestScore: 73
            },
            fielding: {
                catches: 9,
                stumpings: 1
            },
        }
    },
    {
        id: 'russell',
        name: 'Musheer Khan',
        team: 'pbks',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 1,
                average: 27,
                economy: 13.5,
                bestFigures: '1/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Priyansh Arya',
        team: 'pbks',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 17,
                runs: 475,
                hundreds: 1,
                fifties: 2,
                strikeRate: 179.25,
                average: 27.94,
                highestScore: 103
            },
            fielding: {
                catches: 8,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Mitchell Owen',
        team: 'pbks',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    //SRH Players
    {
        id: 'bumrah',
        name: 'Mohammad Shami',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 119,
                runs: 84,
                hundreds: 0,
                fifties: 0,
                strikeRate: 94.28,
                average: 6,
                highestScore: 21
            },
            bowling: {
                wickets: 133,
                average: 28.19,
                economy: 8.63,
                bestFigures: '4/11',
                fiveWickets: 0
            },
            fielding: {
                catches: 21,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Sachin Baby',
        team: 'srh',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 20,
                runs: 144,
                hundreds: 0,
                fifties: 0,
                strikeRate: 122.03,
                average: 14.4,
                highestScore: 33
            },
            bowling: {
                wickets: 2,
                average: 4,
                economy: 4.8,
                bestFigures: '2/4',
                fiveWickets: 0
            },
            fielding: {
                catches: 5,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Abhishek Sharma',
        team: 'srh',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 77,
                runs: 1816,
                hundreds: 1,
                fifties: 9,
                strikeRate: 163.02,
                average: 27.1,
                highestScore: 141
            },
            bowling: {
                wickets: 11,
                average: 45.55,
                economy: 8.95,
                bestFigures: '2/4',
                fiveWickets: 0
            },
            fielding: {
                catches: 25,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Harshal Patel',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 119,
                runs: 270,
                hundreds: 0,
                fifties: 0,
                strikeRate: 117.9,
                average: 9.31,
                highestScore: 36
            },
            bowling: {
                wickets: 151,
                average: 23.7,
                economy: 8.86,
                bestFigures: '5/27',
                fiveWickets: 1
            },
            fielding: {
                catches: 28,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Jaydev Unadkat',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 112,
                runs: 197,
                hundreds: 0,
                fifties: 0,
                strikeRate: 118.67,
                average: 12.31,
                highestScore: 26
            },
            bowling: {
                wickets: 110,
                average: 30.58,
                economy: 8.88,
                bestFigures: '5/25',
                fiveWickets: 2
            },
            fielding: {
                catches: 28,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Rahul Chahar',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 79,
                runs: 129,
                hundreds: 0,
                fifties: 0,
                strikeRate: 104.03,
                average: 8.06,
                highestScore: 25
            },
            bowling: {
                wickets: 75,
                average: 28.67,
                economy: 7.72,
                bestFigures: '4/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 23,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Pat Cummins',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 72,
                runs: 612,
                hundreds: 0,
                fifties: 3,
                strikeRate: 152.24,
                average: 20.4,
                highestScore: 66
            },
            bowling: {
                wickets: 79,
                average: 30.04,
                economy: 8.81,
                bestFigures: '4/34',
                fiveWickets: 0
            },
            fielding: {
                catches: 20,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Ishan Kishan',
        team: 'srh',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 119,
                runs: 2998,
                hundreds: 1,
                fifties: 17,
                strikeRate: 137.65,
                average: 28.83,
                highestScore: 106
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 24,
                bestFigures: '0/4',
                fiveWickets: 0
            },
            fielding: {
                catches: 59,
                stumpings: 5
            },
        }
    },
    {
        id: 'patel',
        name: 'Heinrich Klaasen',
        team: 'srh',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 49,
                runs: 1480,
                hundreds: 2,
                fifties: 7,
                strikeRate: 169.72,
                average: 40,
                highestScore: 105
            },
            fielding: {
                catches: 22,
                stumpings: 7
            },
        }
    },
    {
        id: 'kohli',
        name: 'Travis Head',
        team: 'srh',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 38,
                runs: 1146,
                hundreds: 1,
                fifties: 8,
                strikeRate: 170.03,
                average: 34.73,
                highestScore: 102
            },
            bowling: {
                wickets: 2,
                average: 56.5,
                economy: 11.69,
                bestFigures: '2/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 6,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Simarjeet Singh',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 14,
                runs: 10,
                hundreds: 0,
                fifties: 0,
                strikeRate: 66.67,
                average: 3.33,
                highestScore: 3
            },
            bowling: {
                wickets: 11,
                average: 36.36,
                economy: 10,
                bestFigures: '3/26',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Atharva Taide',
        team: 'srh',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 10,
                runs: 260,
                hundreds: 0,
                fifties: 2,
                strikeRate: 146.89,
                average: 26,
                highestScore: 66
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 24,
                bestFigures: '0/4',
                fiveWickets: 0
            },
            fielding: {
                catches: 5,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Abhinav Manohar',
        team: 'srh',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 27,
                runs: 292,
                hundreds: 0,
                fifties: 0,
                strikeRate: 124.26,
                average: 15.37,
                highestScore: 43
            },
            fielding: {
                catches: 17,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Kamindu Mendis',
        team: 'srh',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 5,
                runs: 92,
                hundreds: 0,
                fifties: 0,
                strikeRate: 133.33,
                average: 30.67,
                highestScore: 32
            },
            bowling: {
                wickets: 2,
                average: 30,
                economy: 8.57,
                bestFigures: '1/4',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Aniket Verma',
        team: 'srh',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 14,
                runs: 236,
                hundreds: 0,
                fifties: 1,
                strikeRate: 166.2,
                average: 26.22,
                highestScore: 74
            },
            fielding: {
                catches: 6,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Zeeshan Ansari',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 10,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 6,
                average: 55.5,
                economy: 9.84,
                bestFigures: '3/42',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Eshan Malinga',
        team: 'srh',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 7,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 13,
                average: 18.31,
                economy: 8.93,
                bestFigures: '3/31',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Nitish Kumar Reddy',
        team: 'srh',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 28,
                runs: 485,
                hundreds: 0,
                fifties: 2,
                strikeRate: 132.88,
                average: 28.53,
                highestScore: 76
            },
            bowling: {
                wickets: 5,
                average: 50.8,
                economy: 10.96,
                bestFigures: '2/17',
                fiveWickets: 0
            },
            fielding: {
                catches: 12,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Wiaan Mulder',
        team: 'srh',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 9,
                hundreds: 0,
                fifties: 0,
                strikeRate: 81.82,
                average: 9,
                highestScore: 9
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 16,
                bestFigures: '0/16',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Harsh Dubey',
        team: 'srh',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 5,
                average: 19.6,
                economy: 9.8,
                bestFigures: '3/34',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    //MI Players
    {
        id: 'patel',
        name: 'Jonny Bairstow',
        team: 'mi',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 52,
                runs: 1674,
                hundreds: 2,
                fifties: 9,
                strikeRate: 146.07,
                average: 34.88,
                highestScore: 114
            },
            fielding: {
                catches: 29,
                stumpings: 4
            },
        }
    },
    {
        id: 'kohli',
        name: 'N. Tilak Varma',
        team: 'mi',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 54,
                runs: 1499,
                hundreds: 0,
                fifties: 8,
                strikeRate: 144.41,
                average: 37.48,
                highestScore: 84
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 7.64,
                bestFigures: '0/6',
                fiveWickets: 0
            },
            fielding: {
                catches: 32,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Raj Angad Bawa',
        team: 'mi',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 5,
                runs: 19,
                hundreds: 0,
                fifties: 0,
                strikeRate: 105.56,
                average: 9.5,
                highestScore: 11
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Richard Gleeson',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 2,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 0,
                highestScore: 2
            },
            bowling: {
                wickets: 2,
                average: 55,
                economy: 9.71,
                bestFigures: '1/30',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Trent Boult',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 120,
                runs: 85,
                hundreds: 0,
                fifties: 0,
                strikeRate: 104.94,
                average: 9.44,
                highestScore: 17
            },
            bowling: {
                wickets: 143,
                average: 26.2,
                economy: 8.38,
                bestFigures: '4/18',
                fiveWickets: 0
            },
            fielding: {
                catches: 35,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Rohit Sharma',
        team: 'mi',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 272,
                runs: 7046,
                hundreds: 2,
                fifties: 47,
                strikeRate: 132.1,
                average: 29.73,
                highestScore: 109
            },
            bowling: {
                wickets: 15,
                average: 30.2,
                economy: 8.02,
                bestFigures: '4/6',
                fiveWickets: 0
            },
            fielding: {
                catches: 102,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Hardik Pandya',
        team: 'mi',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 152,
                runs: 2749,
                hundreds: 0,
                fifties: 10,
                strikeRate: 146.93,
                average: 28.34,
                highestScore: 91
            },
            bowling: {
                wickets: 78,
                average: 31.95,
                economy: 9.18,
                bestFigures: '5/36',
                fiveWickets: 1
            },
            fielding: {
                catches: 73,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Surya Kumar Yadav',
        team: 'mi',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 166,
                runs: 4311,
                hundreds: 2,
                fifties: 29,
                strikeRate: 148.66,
                average: 35.05,
                highestScore: 103
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 8,
                bestFigures: '0/8',
                fiveWickets: 0
            },
            fielding: {
                catches: 73,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Mitchell Santner',
        team: 'mi',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 31,
                runs: 110,
                hundreds: 0,
                fifties: 0,
                strikeRate: 105.77,
                average: 13.75,
                highestScore: 22
            },
            bowling: {
                wickets: 25,
                average: 29.4,
                economy: 7.31,
                bestFigures: '3/11',
                fiveWickets: 0
            },
            fielding: {
                catches: 14,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Jasprit Bumrah',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 145,
                runs: 68,
                hundreds: 0,
                fifties: 0,
                strikeRate: 86.08,
                average: 9.71,
                highestScore: 16
            },
            bowling: {
                wickets: 183,
                average: 22.02,
                economy: 7.25,
                bestFigures: '5/10',
                fiveWickets: 2
            },
            fielding: {
                catches: 18,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Deepak Chahar',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 95,
                runs: 117,
                hundreds: 0,
                fifties: 0,
                strikeRate: 139.29,
                average: 14.63,
                highestScore: 39
            },
            bowling: {
                wickets: 88,
                average: 29.51,
                economy: 8.14,
                bestFigures: '4/13',
                fiveWickets: 0
            },
            fielding: {
                catches: 15,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Karn Sharma',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 90,
                runs: 352,
                hundreds: 0,
                fifties: 0,
                strikeRate: 119.32,
                average: 14.08,
                highestScore: 39
            },
            bowling: {
                wickets: 83,
                average: 26.69,
                economy: 8.38,
                bestFigures: '4/16',
                fiveWickets: 0
            },
            fielding: {
                catches: 23,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Arjun Tendulkar',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 5,
                runs: 13,
                hundreds: 0,
                fifties: 0,
                strikeRate: 144.44,
                average: 13,
                highestScore: 13
            },
            bowling: {
                wickets: 3,
                average: 38,
                economy: 9.37,
                bestFigures: '1/9',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Robin Minz',
        team: 'mi',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 2,
                runs: 6,
                hundreds: 0,
                fifties: 0,
                strikeRate: 40,
                average: 3,
                highestScore: 3
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Reece Topley',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 6,
                runs: 3,
                hundreds: 0,
                fifties: 0,
                strikeRate: 50,
                average: 0,
                highestScore: 3
            },
            bowling: {
                wickets: 5,
                average: 44.4,
                economy: 11.1,
                bestFigures: '2/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Ashwani Kumar',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 7,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 11,
                average: 21.09,
                economy: 11.32,
                bestFigures: '4/24',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Naman Dhir',
        team: 'mi',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 23,
                runs: 392,
                hundreds: 0,
                fifties: 1,
                strikeRate: 180.65,
                average: 28,
                highestScore: 62
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 8.77,
                bestFigures: '0/12',
                fiveWickets: 0
            },
            fielding: {
                catches: 15,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'V. Satyanarayana Penmetsa',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 2,
                runs: 1,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 0,
                highestScore: 1
            },
            bowling: {
                wickets: 1,
                average: 53,
                economy: 13.25,
                bestFigures: '1/40',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Mujeeb-ur-Rahman',
        team: 'mi',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 20,
                runs: 12,
                hundreds: 0,
                fifties: 0,
                strikeRate: 80,
                average: 4,
                highestScore: 10
            },
            bowling: {
                wickets: 20,
                average: 31,
                economy: 8.34,
                bestFigures: '3/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    //RR Players
    {
        id: 'russell',
        name: 'Wanindu Hasaranga',
        team: 'rr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 37,
                runs: 81,
                hundreds: 0,
                fifties: 0,
                strikeRate: 92.05,
                average: 5.4,
                highestScore: 18
            },
            bowling: {
                wickets: 46,
                average: 24.33,
                economy: 8.41,
                bestFigures: '5/18',
                fiveWickets: 1
            },
            fielding: {
                catches: 5,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Jofra Archer',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 52,
                runs: 262,
                hundreds: 0,
                fifties: 0,
                strikeRate: 147.19,
                average: 13.79,
                highestScore: 30
            },
            bowling: {
                wickets: 59,
                average: 27.15,
                economy: 7.89,
                bestFigures: '3/15',
                fiveWickets: 0
            },
            fielding: {
                catches: 11,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Yudhvir Singh Charak',
        team: 'rr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 9,
                runs: 22,
                hundreds: 0,
                fifties: 0,
                strikeRate: 137.5,
                average: 5.5,
                highestScore: 14
            },
            bowling: {
                wickets: 8,
                average: 31.63,
                economy: 11,
                bestFigures: '3/47',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Kumar Kartikeya',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 16,
                runs: 12,
                hundreds: 0,
                fifties: 0,
                strikeRate: 70.59,
                average: 3,
                highestScore: 6
            },
            bowling: {
                wickets: 12,
                average: 33.92,
                economy: 8.66,
                bestFigures: '2/22',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Kunal Rathore',
        team: 'rr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Shimron Hetmyer',
        team: 'rr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 86,
                runs: 1482,
                hundreds: 0,
                fifties: 5,
                strikeRate: 151.84,
                average: 29.06,
                highestScore: 75
            },
            fielding: {
                catches: 45,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Yashasvi Jaiswal',
        team: 'rr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 67,
                runs: 2166,
                hundreds: 2,
                fifties: 15,
                strikeRate: 152.86,
                average: 34.38,
                highestScore: 124
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 36,
                bestFigures: '0/6',
                fiveWickets: 0
            },
            fielding: {
                catches: 28,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Riyan Parag',
        team: 'rr',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 84,
                runs: 1566,
                hundreds: 0,
                fifties: 7,
                strikeRate: 141.85,
                average: 26.1,
                highestScore: 95
            },
            bowling: {
                wickets: 7,
                average: 68.14,
                economy: 9.7,
                bestFigures: '1/7',
                fiveWickets: 0
            },
            fielding: {
                catches: 45,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Sanju Samson',
        team: 'rr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 177,
                runs: 4704,
                hundreds: 3,
                fifties: 26,
                strikeRate: 139.05,
                average: 30.95,
                highestScore: 119
            },
            fielding: {
                catches: 86,
                stumpings: 17
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Tushar Deshpande',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 46,
                runs: 28,
                hundreds: 0,
                fifties: 0,
                strikeRate: 127.27,
                average: 14,
                highestScore: 20
            },
            bowling: {
                wickets: 51,
                average: 31.04,
                economy: 9.84,
                bestFigures: '4/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 8,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Dhruv Jurel',
        team: 'rr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 42,
                runs: 680,
                hundreds: 0,
                fifties: 4,
                strikeRate: 153.85,
                average: 28.33,
                highestScore: 70
            },
            fielding: {
                catches: 19,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Maheesh Theekshana',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 38,
                runs: 17,
                hundreds: 0,
                fifties: 0,
                strikeRate: 50,
                average: 5.67,
                highestScore: 7
            },
            bowling: {
                wickets: 36,
                average: 33.53,
                economy: 8.27,
                bestFigures: '4/33',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Fazalhaq Farooqi',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 12,
                runs: 5,
                hundreds: 0,
                fifties: 0,
                strikeRate: 33.33,
                average: 0,
                highestScore: 2
            },
            bowling: {
                wickets: 6,
                average: 72.83,
                economy: 10.32,
                bestFigures: '2/32',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Akash Madhwal',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 17,
                runs: 8,
                hundreds: 0,
                fifties: 0,
                strikeRate: 57.14,
                average: 0,
                highestScore: 4
            },
            bowling: {
                wickets: 23,
                average: 25.65,
                economy: 10.06,
                bestFigures: '5/5',
                fiveWickets: 1
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Shubham Dubey',
        team: 'rr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 13,
                runs: 139,
                hundreds: 0,
                fifties: 0,
                strikeRate: 163.53,
                average: 23.17,
                highestScore: 34
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Kwena Maphaka',
        team: 'rr',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 4,
                runs: 8,
                hundreds: 0,
                fifties: 0,
                strikeRate: 400,
                average: 0,
                highestScore: 8
            },
            bowling: {
                wickets: 2,
                average: 71.5,
                economy: 13,
                bestFigures: '1/23',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Vaibhav Suryavanshi',
        team: 'rr',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 7,
                runs: 252,
                hundreds: 1,
                fifties: 1,
                strikeRate: 206.56,
                average: 36,
                highestScore: 101
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Lhuan dre Pretorius',
        team: 'rr',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    //RCB Players
    {
        id: 'bumrah',
        name: 'Josh Hazlewood',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 39,
                runs: 19,
                hundreds: 0,
                fifties: 0,
                strikeRate: 65.52,
                average: 0,
                highestScore: 7
            },
            bowling: {
                wickets: 57,
                average: 20.98,
                economy: 8.28,
                bestFigures: '4/25',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Mayank Agarwal',
        team: 'rcb',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 131,
                runs: 2756,
                hundreds: 1,
                fifties: 13,
                strikeRate: 133.53,
                average: 22.97,
                highestScore: 106
            },
            fielding: {
                catches: 59,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Tim Seifert',
        team: 'rcb',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 3,
                runs: 26,
                hundreds: 0,
                fifties: 0,
                strikeRate: 113.04,
                average: 8.67,
                highestScore: 21
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'bumrah',
        name: 'Rasikh Dar',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 30,
        photo: '',
        stats: {
            batting: {
                matches: 13,
                runs: 40,
                hundreds: 0,
                fifties: 0,
                strikeRate: 100,
                average: 8,
                highestScore: 10
            },
            bowling: {
                wickets: 10,
                average: 40.9,
                economy: 10.62,
                bestFigures: '3/34',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Phil Salt',
        team: 'rcb',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 34,
                runs: 1056,
                hundreds: 0,
                fifties: 10,
                strikeRate: 175.71,
                average: 34.06,
                highestScore: 89
            },
            fielding: {
                catches: 26,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Tim David',
        team: 'rcb',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 50,
                runs: 846,
                hundreds: 0,
                fifties: 1,
                strikeRate: 173.36,
                average: 32.54,
                highestScore: 50
            },
            fielding: {
                catches: 29,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Liam Livingstone',
        team: 'rcb',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 49,
                runs: 1051,
                hundreds: 0,
                fifties: 7,
                strikeRate: 158.76,
                average: 26.28,
                highestScore: 94
            },
            bowling: {
                wickets: 13,
                average: 36.08,
                economy: 9.02,
                bestFigures: '3/27',
                fiveWickets: 0
            },
            fielding: {
                catches: 22,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Lungisani Ngidi',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 16,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 29,
                average: 18.24,
                economy: 8.53,
                bestFigures: '4/10',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Rajat Patidar',
        team: 'rcb',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 42,
                runs: 1111,
                hundreds: 1,
                fifties: 9,
                strikeRate: 154.31,
                average: 30.86,
                highestScore: 112
            },
            fielding: {
                catches: 10,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Bhuvneshwar Kumar',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 190,
                runs: 320,
                hundreds: 0,
                fifties: 0,
                strikeRate: 91.17,
                average: 8.42,
                highestScore: 27
            },
            bowling: {
                wickets: 198,
                average: 27.33,
                economy: 7.69,
                bestFigures: '5/19',
                fiveWickets: 2
            },
            fielding: {
                catches: 38,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Virat Kohli',
        team: 'rcb',
        role: 'Batsman',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 267,
                runs: 8661,
                hundreds: 8,
                fifties: 63,
                strikeRate: 132.86,
                average: 39.73,
                highestScore: 113
            },
            bowling: {
                wickets: 4,
                average: 92,
                economy: 8.8,
                bestFigures: '2/25',
                fiveWickets: 0
            },
            fielding: {
                catches: 117,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Krunal Pandya',
        team: 'rcb',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 142,
                runs: 1756,
                hundreds: 0,
                fifties: 2,
                strikeRate: 132.43,
                average: 22.23,
                highestScore: 86
            },
            bowling: {
                wickets: 93,
                average: 32.1,
                economy: 7.47,
                bestFigures: '4/45',
                fiveWickets: 0
            },
            fielding: {
                catches: 52,
                stumpings: 0
            },
        }
    },
    {
        id: 'patel',
        name: 'Jitesh Sharma',
        team: 'rcb',
        role: 'Wicket-keeper',
        country: 'India',
        age: 42,
        photo: '',
        stats: {
            batting: {
                matches: 55,
                runs: 991,
                hundreds: 0,
                fifties: 1,
                strikeRate: 157.05,
                average: 25.41,
                highestScore: 85
            },
            fielding: {
                catches: 44,
                stumpings: 5
            },
        }
    },
    {
        id: 'russell',
        name: 'Swapnil Singh',
        team: 'rcb',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 14,
                runs: 51,
                hundreds: 0,
                fifties: 0,
                strikeRate: 113.33,
                average: 10.2,
                highestScore: 15
            },
            bowling: {
                wickets: 7,
                average: 34.43,
                economy: 8.93,
                bestFigures: '2/28',
                fiveWickets: 0
            },
            fielding: {
                catches: 3,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Romario Shepherd',
        team: 'rcb',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 18,
                runs: 185,
                hundreds: 0,
                fifties: 1,
                strikeRate: 212.64,
                average: 26.43,
                highestScore: 53
            },
            bowling: {
                wickets: 10,
                average: 40.8,
                economy: 11.66,
                bestFigures: '2/14',
                fiveWickets: 0
            },
            fielding: {
                catches: 4,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Yash Dayal',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 43,
                runs: 4,
                hundreds: 0,
                fifties: 0,
                strikeRate: 44.44,
                average: 1.33,
                highestScore: 3
            },
            bowling: {
                wickets: 41,
                average: 33.09,
                economy: 9.58,
                bestFigures: '3/20',
                fiveWickets: 0
            },
            fielding: {
                catches: 8,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Nuwan Thushara',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 8,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 9,
                average: 31.44,
                economy: 9.43,
                bestFigures: '3/28',
                fiveWickets: 0
            },
            fielding: {
                catches: 1,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Mohit Rathee',
        team: 'rcb',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 1,
                hundreds: 0,
                fifties: 0,
                strikeRate: 50,
                average: 0,
                highestScore: 1
            },
            bowling: {
                wickets: 0,
                average: 0,
                economy: 14.5,
                bestFigures: '0/29',
                fiveWickets: 0
            },
            fielding: {
                catches: 0,
                stumpings: 0
            },
        }
    },
    {
        id: 'kohli',
        name: 'Suyash Sharma',
        team: 'rcb',
        role: 'Bowler',
        country: 'India',
        age: 35,
        photo: '',
        stats: {
            batting: {
                matches: 27,
                runs: 0,
                hundreds: 0,
                fifties: 0,
                strikeRate: 0,
                average: 0,
                highestScore: 0
            },
            bowling: {
                wickets: 18,
                average: 45.22,
                economy: 8.75,
                bestFigures: '3/17',
                fiveWickets: 0
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
    {
        id: 'russell',
        name: 'Manoj Bhandage',
        team: 'rcb',
        role: 'All-rounder',
        country: 'West Indies',
        age: 36,
        photo: '',
        stats: {
            batting: {
                matches: 1,
                runs: 1,
                hundreds: 0,
                fifties: 0,
                strikeRate: 25,
                average: 1,
                highestScore: 1
            },
            fielding: {
                catches: 2,
                stumpings: 0
            },
        }
    },
];

// Add default bowling stats to players without bowling stats
players.forEach(player => {
  if (!player.stats.bowling) {
    player.stats.bowling = {
      wickets: 0,
      average: 0,
      economy: 0,
      bestFigures: '0/0',
      fiveWickets: 0
    };
  }
});

// Add default batting stats to players without batting stats
players.forEach(player => {
  if (!player.stats.batting) {
    player.stats.batting = { 
      matches: 0, 
      runs: 0, 
      average: 0, 
      strikeRate: 0, 
      fifties: 0, 
      hundreds: 0, 
      highestScore: 0 
    };
  }
});
players.forEach(player => {
  if (player.role=='Wicket-keeper') {
    player.photo="/static/comparison/img/wk.png"
  }
  if (player.role=='Bowler') {
    player.photo="/static/comparison/img/ball.png"
  }
  if (player.role=='Batsman') {
    player.photo="/static/comparison/img/bat.png"
  }
  if (player.role=='All-rounder') {
    player.photo="/static/comparison/img/all.png"
  }
});

