const data = [
  {
    name: "Chetan Business School, Sri Nagar, Hubli, Karnataka, India",
    lat: 15.387667,
    long: 75.116211,
  },
  {
    name: "SAGE University, Indore, Madhya Pradesh, India",
    lat: 22.636843,
    long: 75.85186,
  },
  {
    name: "Sb Patil College of Engineering, Pune, Maharashtra, India",
    lat: 18.147085,
    long: 74.777115,
  },
  {
    name: "Shiv Charan Mathur Institute Of Management and Technology, Rajasthan, India",
    lat: 25.358772,
    long: 74.653236,
  },
  {
    name: "N.S College of Horticultural Sciences, Idupur, Andhra Pradesh, India",
    lat: 15.804958,
    long: 79.257423,
  },
  {
    name: "Chanakya Junior College, Pune, Maharashtra, India",
    lat: 18.511143,
    long: 73.683479,
  },
  {
    name: "AZMET Institute of Technology, Kishanganj, Bihar, India",
    lat: 26.170353,
    long: 87.828934,
  },
  {
    name: "Chandra Shekhar Singh College of Pharmacy, Kausambi, Prayagraj, Uttar Pradesh, India",
    lat: 25.492682,
    long: 81.660103,
  },
  {
    name: "Eshan College Of Engineering, Shehzadpur Pauri, Uttar Pradesh, India",
    lat: 27.290924,
    long: 77.787956,
  },
  {
    name: "Chennai Institute of Technology, Chennai, Thamil Nadu, India",
    lat: 12.971581,
    long: 80.043419,
  },
  {
    name: "Sri Ram Sevak Savitri Devi Ic, Keshampur Auraiya, Uttar Pradesh, India",
    lat: 26.603096,
    long: 79.439285,
  },
  {
    name: "K. N. Govt Arts College, N.S.C Bose Nagar, Thanjavur, Tamil Nadu, India",
    lat: 10.770631,
    long: 79.127686,
  },
  {
    name: "VVS PU College, Women's Part, Bengaluru, Karnataka, India",
    lat: 13.004285,
    long: 77.550385,
  },
  {
    name: "Sir boys Pu college, Krishnanagar, Mysore, Karnataka, India",
    lat: 12.30902,
    long: 76.643234,
  },
  {
    name: "SRM Degree & PG Colleges, Karimnagar, Telangana, India",
    lat: 18.44219,
    long: 79.089142,
  },
  {
    name: "Sri Sai Degree College, Kalwakurthy, Telangana, India",
    lat: 16.6686,
    long: 78.495598,
  },
  {
    name: "Shri Ratan Pvt ITI, Thandla, Madhya Pradesh, India",
    lat: 23.030481,
    long: 74.576004,
  },
  {
    name: "Vaish College of Law, Rohtak, Haryana, India",
    lat: 28.885715,
    long: 76.577003,
  },
  {
    name: "Mother Theresa Institute of Science and Technology, Sathupally, Telagana, India",
    lat: 17.186069,
    long: 80.827423,
  },
  {
    name: "Mother Teresa Pharmacy College, Telangana, India",
    lat: 17.437342,
    long: 78.701363,
  },
  {
    name: "Asansol Engineering College, Asansol, West Bengal, India",
    lat: 23.715609,
    long: 86.951584,
  },
  {
    name: "Azmet College of Engineering and Technology, Kishanganj, Bihar, India",
    lat: 26.164164,
    long: 87.96814,
  },
  {
    name: "St. Joseph Degree & PG College, Madikonda, Kazipet, Telagana, India",
    lat: 17.918524,
    long: 79.444832,
  },
  {
    name: "Khandelwal College of Architecture & Design, Bareilly, Uttar Pradesh, India",
    lat: 28.436647,
    long: 79.485809,
  },
  {
    name: "AASAN Academy, Gopiballabpur, West Bengal, India",
    lat: 22.210951,
    long: 86.896141,
  },
  {
    name: "Mithibai College, Mumbai, Maharashtra, India",
    lat: 19.102837,
    long: 72.837273,
  },
  {
    name: "Dayananda Sagar College of Engineering, Bengaluru, Karnataka, India",
    lat: 12.909477,
    long: 77.566833,
  },
  {
    name: "Prizm Institute, Nehru Nagar, Mumbai, Maharashtra, India",
    lat: 19.064671,
    long: 72.883804,
  },
  {
    name: "Vivekananda College of Technology and Management, Aligarh, Uttar Pradesh, India",
    lat: 27.883827,
    long: 78.028656,
  },
  {
    name: "MEGHA Classes Dhanpuri, Imam Bada, Dhanpuri, Madhya Pradesh, India",
    lat: 23.186037,
    long: 81.553932,
  },
  {
    name: "SCRV ITE, Angadical, Chengannur, Kerala, India",
    lat: 9.321053,
    long: 76.62352,
  },
  {
    name: "Moreh College, Chikim, Manipur, India",
    lat: 24.256483,
    long: 94.291245,
  },
  {
    name: "FIT Engineering College, Meerut, Uttar Pradesh, India",
    lat: 29.014225,
    long: 77.759933,
  },
  {
    name: "Ashokrao Mane Group Of Institutions, Kolhapur,Maharashtra, India",
    lat: 16.84503,
    long: 74.298721,
  },
  {
    name: "Jasoda Devi Teachers Training College, Sitapura, Jaipur, Rajasthan, India",
    lat: 26.767958,
    long: 75.838593,
  },
  {
    name: "College of Teacher Education, Mangaldai, Assam, India",
    lat: 26.441786,
    long: 92.036835,
  },
  {
    name: "Murti Devi Memorial College, Baghpat, Uttar Pradesh, India",
    lat: 28.952917,
    long: 77.369675,
  },
  {
    name: "ICS Computers Tally Institute of Learning, Paonta Sahib, Himachal Pradesh, India",
    lat: 30.443266,
    long: 77.607979,
  },
  {
    name: "Rajsudha Institute of Technical Education, Kazmabad Goon, Uttar Pradesh, India",
    lat: 28.907732,
    long: 77.5774,
  },
  {
    name: "Sri Thiyageraja B.Ed College, Kattur, Thiruvarur, Tamil Nadu, India",
    lat: 10.801891,
    long: 79.60141,
  },
  {
    name: "Sri Parasnath Institute of Education and Technology, Pipalsana, Uttar Pradesh, India",
    lat: 28.921412,
    long: 78.837173,
  },
  {
    name: "Brilliant Career Academy & Emitra, Singhana, Rajasthan, India",
    lat: 28.096256,
    long: 75.842621,
  },
  {
    name: "AISECT University city office, Panna, Madhya Pradesh, India",
    lat: 24.7195,
    long: 80.189011,
  },
  {
    name: "Sakshi Computers and Online, Manasa, Madhya Pradesh India",
    lat: 24.474449,
    long: 75.136566,
  },
  {
    name: "Arman Computer and Choice Center, Sandi, Chhattisgarh, India",
    lat: 21.453362,
    long: 82.06881,
  },
  {
    name: "Ramrati Verma Nanhku Verma Mahavidyalay, Dwarikaganj, Sultanpur, Uttar Pradesh, India",
    lat: 26.31048,
    long: 82.115761,
  },
  {
    name: "D.I.E.T. Roorkee, Ramnagar, Sunhaira, Uttarakhand, India",
    lat: 29.8745,
    long: 77.869621,
  },
  {
    name: "CRS Academy, Ghosia, Uttar Pradesh, India",
    lat: 25.271582,
    long: 82.54158,
  },
  {
    name: "Institute of Computer Management, Bhusawal, Maharashtra, India",
    lat: 21.051888,
    long: 75.781891,
  },
  {
    name: "S.P.S. INTER COLLEGE, Khalilabad, Uttar Pradesh, India",
    lat: 26.764177,
    long: 83.076775,
  },
  {
    name: "Lal Chand Mal College Of Education, Jhansa, Haryana, India",
    lat: 30.114763,
    long: 76.740738,
  },
  {
    name: "SSHC Jain Institute Of Management & Research, Sagar, Madhya Pradesh, India",
    lat: 23.838804,
    long: 78.737808,
  },
  {
    name: "SIDDHAKALA Institute of Information Technology, Mira Bhayandar, Maharashtra, India",
    lat: 19.294333,
    long: 72.867882,
  },
  {
    name: "IICE Technical College, Sikar, Rajasthan, India",
    lat: 27.614258,
    long: 75.145195,
  },
  {
    name: "BIITS Vvocational Education Institute, Kalanaur, Haryana, India",
    lat: 28.82453,
    long: 76.395378,
  },
  {
    name: "AU College of Engg for Women, Visakhapatnam, Andhra Pradesh, India",
    lat: 17.686836,
    long: 83.218475,
  },
  {
    name: "SHIV Charan Mathur Institute of Management and Technology, Bhilwara, Rajasthan, India",
    lat: 25.358749,
    long: 74.65332,
  },
  {
    name: "Govt. Polytechnic College Janjgir, Khokhra, Chhattisgarh, India",
    lat: 21.977171,
    long: 82.57589,
  },
  {
    name: "GOUTHAMI Degree College, Medikuntapally, Bhuvanagiri, Telangana, India",
    lat: 17.515722,
    long: 78.885857,
  },
  {
    name: "Vikas Degree College, Sircilla, Karimnagar, Andhra Pradesh, India",
    lat: 18.394974,
    long: 78.812317,
  },
  {
    name: "Dudhinagar, Uttar Pradesh, India",
    lat: 24.215406,
    long: 83.238556,
  },
  {
    name: "Parmanand Degree College, Rajasthan, India",
    lat: 29.659361,
    long: 73.45311,
  },
  {
    name: "Dholbazza Bazar, Bihar, India",
    lat: 25.482275,
    long: 87.084274,
  },
  {
    name: "Sri Renga Polytechnic College, Siruganur, Tamil Nadu, India",
    lat: 11.014572,
    long: 78.795502,
  },
  {
    name: "Haryana Shakti College of Education, Delhi, India",
    lat: 28.712507,
    long: 77.003456,
  },
  {
    name: "P.C.P.S. College Of Technology and Management, Mathura, Uttar Pradesh, India",
    lat: 27.446754,
    long: 77.603394,
  },
  {
    name: "Shri Shivaji Jr.College, Barad, Nanded, Maharashtra, India",
    lat: 19.227873,
    long: 77.469513,
  },
  {
    name: "Sondarba Ramsinh Mangrola Institute of Technology, Valia, Gujarat, India",
    lat: 21.569529,
    long: 73.1688,
  },
  {
    name: "Little Flower Polytechnic, Uttar Pradesh, India",
    lat: 26.707308,
    long: 83.443428,
  },
  {
    name: "Maharana Pratap Degree College, Gorakhpur, Uttar Pradesh, India",
    lat: 26.794573,
    long: 83.431335,
  },
  {
    name: "Veludaiyar Polytechnic College, Ammaiyappan, Tamil Nadu, India",
    lat: 10.788888,
    long: 79.576782,
  },
  {
    name: "Bhind, Madhya Pradesh, India",
    lat: 26.558735,
    long: 78.787285,
  },
  {
    name: "Shadan Womens' College of Engineering & Technology, Hyderabad, Telagana, India",
    lat: 17.40971,
    long: 78.461082,
  },
  {
    name: "Aditya Computer Centre, Murud, Maharashtra, India",
    lat: 18.402493,
    long: 76.240105,
  },
  {
    name: "Anand Group of Institute, Bhind, Madhya Pradesh, India",
    lat: 26.563074,
    long: 78.790878,
  },
  {
    name: "Amrutvahini Pharmacy College, Ghulewadi, Maharashtra, India",
    lat: 19.623985,
    long: 74.177605,
  },
  {
    name: "Sarna Institute Of Social Service, Chakulia, Jharkhand, India.",
    lat: 22.478479,
    long: 86.721359,
  },
  {
    name: "Insight Institute of Education, Chhatarpur, Madhya Pradesh, India",
    lat: 25.124327,
    long: 79.991875,
  },
  {
    name: "TAPASYA PU College, Chandapura, Bommasandra, Karnataka, India",
    lat: 12.800494,
    long: 77.713615,
  },
  {
    name: "JAI HIND Pre University College, Vijayanagar, Bengaluru, Karnataka, India",
    lat: 12.962516,
    long: 77.544998,
  },
  {
    name: "Doddappa Appa Independent PU Science College, Kalaburagi, Karnataka, India",
    lat: 17.335739,
    long: 76.828751,
  },
  {
    name: "KHYKHA Pre-University College, Banashankari, Bengaluru, Karnataka, India",
    lat: 12.917582,
    long: 77.565453,
  },
  {
    name: "Disha Tech & Computer Institute, Asalgaon, Maharashtra, India",
    lat: 21.01144,
    long: 76.492424,
  },
  {
    name: "Andhra Engineering College, Atmakur, Andhra Pradesh, India",
    lat: 14.646123,
    long: 79.613281,
  },
  {
    name: "Infotech Computer Education Center, Dhaulana, Uttar Pradesh, India",
    lat: 28.632433,
    long: 77.650749,
  },
  {
    name: "NEC Institute of Multipurpose Education, Amritsar, Punjab, India",
    lat: 31.628216,
    long: 74.871956,
  },
  {
    name: "Modern College, Khurd, Punjab, India",
    lat: 30.55197,
    long: 75.753632,
  },
  {
    name: "Morgaon, Maharashtra, India",
    lat: 18.272648,
    long: 74.320618,
  },
  {
    name: "RDPD Girls PG College, Uttar Pradesh, India",
    lat: 28.381159,
    long: 78.114769,
  },
  {
    name: "Lord Buddha Eduacational Trust, Bhagwanpur, Muzaffarpur, Bihar, India",
    lat: 26.119909,
    long: 85.354034,
  },
  {
    name: "Shri Roopram Institute of Education, Sona, Uttar Pradesh, India",
    lat: 30.001114,
    long: 77.703049,
  },
  {
    name: "Hari Om Shiv Om College of Education, Radaur, Haryana, India",
    lat: 30.041355,
    long: 77.160904,
  },
  {
    name: "Mange Ram Women's College of Education, Sonipat, Haryana, India",
    lat: 29.01683,
    long: 77.007103,
  },
  {
    name: "Spice CNC Training Centre, Tirunelveli, Tamil Nadu, India",
    lat: 8.726195,
    long: 77.730438,
  },
  {
    name: "Rajesh Pilot Memorial College of Education, Village Nayan, Haryana, India",
    lat: 27.86865,
    long: 76.167084,
  },
  {
    name: "SCCM Computer (AISECT), Al Bhawani Colony, Madhya Pradesh, India",
    lat: 23.470751,
    long: 80.112778,
  },
  {
    name: "Vocational Training Institute, Darbhanga, Bihar, India",
    lat: 26.146269,
    long: 85.895592,
  },
  {
    name: "Bilhaur, Uttar Pradesh, India",
    lat: 26.842434,
    long: 80.063522,
  },
  {
    name: "Shah Goverdhan Lal Kabra Teachers\\' College, Jodhpur, Rajasthan, India",
    lat: 26.283895,
    long: 73.007874,
  },
  {
    name: "Shri Ramakant Vyas Mahila S Prashikshan Mahavid, Chirawa, Rajasthan, India",
    lat: 28.241533,
    long: 75.649994,
  },
  {
    name: "JG College of Nursing, Ahmedabad, Gujarat, India",
    lat: 23.065395,
    long: 72.526115,
  },
  {
    name: "Kabi Nazrul College, Birbhum, West Bengal, India",
    lat: 24.440908,
    long: 87.85759,
  },
  {
    name: "Sirsa College of Science & Technology, Baheri, Uttar Pradesh, India",
    lat: 28.782917,
    long: 79.500328,
  },
  {
    name: "Sri Kethaki Sangameshwara DEd & BEd College, Jharasangam, Telagana, India",
    lat: 17.764095,
    long: 77.717392,
  },
  {
    name: "Chanchal Youth Computer Training Center, Chanchal, West Bengal, India",
    lat: 25.391785,
    long: 88.006271,
  },
  {
    name: "C.M Science College Darbhanga, India",
    lat: 26.153242,
    long: 85.892593,
  },
  {
    name: "Jasdan, Gujarat, India",
    lat: 22.035608,
    long: 71.201775,
  },
  {
    name: "Thiagarajar College of Education, Lakshminagar, Valappadi, Tamil Nadu, India",
    lat: 11.659445,
    long: 78.414223,
  },
  {
    name: "Sri Thiagarajar Polytechnic College, Valappadi, Tamil Nadu, India",
    lat: 11.659445,
    long: 78.411102,
  },
  {
    name: "Malwa College of Education, Distt-Guna, Madhya Pradesh, India",
    lat: 24.208044,
    long: 77.039703,
  },
  {
    name: "Omkar college of Professional Studies, Guna, Madhya Pradesh, India",
    lat: 24.628307,
    long: 77.293427,
  },
  {
    name: "AIMTEC POINT Institute, Baner, Maharashtra, India",
    lat: 18.56428,
    long: 73.781502,
  },
  {
    name: "Impact College of Science & Technology, Patter Khera, Uttar Pradesh, India",
    lat: 28.838169,
    long: 79.118332,
  },
  {
    name: "Shree Sadguru Computer Institute, Loni, Maharashtra, India",
    lat: 21.37429,
    long: 78.182068,
  },
  {
    name: "E-Gram CSC Center & Gothda, Timba Road, Gujarat, India",
    lat: 22.809177,
    long: 73.37645,
  },
  {
    name: "IIHT Computer Center, Dahod, Gujarat, India",
    lat: 22.838627,
    long: 74.254112,
  },
  {
    name: "PIITs Academy, Jaipur, Rajasthan, India",
    lat: 26.972013,
    long: 75.738708,
  },
  {
    name: "Milat Computer Training Center, Wata Lar, Jammu and Kashmir, India",
    lat: 34.266361,
    long: 74.768204,
  },
  {
    name: "Phaphund, Uttar Pradesh, India",
    lat: 26.599792,
    long: 79.464813,
  },
  {
    name: "Institute of Information and Computer Education, Firozabad, Uttar Pradesh, India",
    lat: 27.158028,
    long: 78.399178,
  },
  {
    name: "Disha Technology, Hingonia, Rajasthan, India",
    lat: 27.030613,
    long: 75.460854,
  },
  {
    name: "CSC Center, Sardarshahar, Uttar Pradesh, India",
    lat: 28.44157,
    long: 74.490807,
  },
  {
    name: "Bhuna, Haryana, India",
    lat: 29.538067,
    long: 75.708038,
  },
  {
    name: "Instant Career Academy, Brahmapuri, Maharashtra, India",
    lat: 20.613201,
    long: 79.855698,
  },
  {
    name: "Kaij, Maharashtra, India",
    lat: 18.714235,
    long: 76.064377,
  },
  {
    name: "Arunai College of Education, Tiruvannamalai, Tamil Nadu, India",
    lat: 12.220284,
    long: 79.11322,
  },
  {
    name: "Sasurie College of Engineering, Pallagoundenpalayam, Tamil Nadu, India",
    lat: 11.21728,
    long: 77.489311,
  },
  {
    name: "Aishwarya College, Pali, Rajasthan, India",
    lat: 25.779238,
    long: 73.351097,
  },
  {
    name: "Sonali College, Guna, Madhya Pradesh, India",
    lat: 24.651806,
    long: 77.322159,
  },
  {
    name: "Ratalya, Rajasthan, India",
    lat: 26.759521,
    long: 75.759628,
  },
  {
    name: "Pipalsana, Uttar Pradesh, India",
    lat: 29.130289,
    long: 78.299774,
  },
  {
    name: "Nehru Memorial Government College, Mansa, Punjab, India",
    lat: 30.016434,
    long: 75.397919,
  },
  {
    name: "Vaidya Shri M.M. Patel College of Education, Ahmedabad, Gujarat, India",
    lat: 23.028713,
    long: 72.552895,
  },
  {
    name: "Gandhi Krishi Vigyan Kendra, Bengaluru, Karnataka, India",
    lat: 13.081449,
    long: 77.576935,
  },
  {
    name: "APTECH Computer Education, Kushalnagar, Karnataka, India",
    lat: 12.457373,
    long: 75.961792,
  },
  {
    name: "Soro, Odisha, India",
    lat: 21.288694,
    long: 86.689316,
  },
  {
    name: "Institute of Prince Computer, Sardarshahr, Rajasthan, India",
    lat: 28.439299,
    long: 74.489784,
  },
  {
    name: "Swami Vivekanand College Of Prof.Studies Shivpuri M.P., Khankar, Madhya Pradesh, India",
    lat: 25.558374,
    long: 77.735374,
  },
  {
    name: "B. Ed. College, Purulia, West Bengal, India",
    lat: 23.343723,
    long: 86.368378,
  },
  {
    name: "Sant Deewan Karamchand Girls College, Navlakha, Indore, Madhya Pradesh, India",
    lat: 22.699026,
    long: 75.865311,
  },
  {
    name: "ISBA Institute Of Professional Studies, Indore, Madhya Pradesh, India",
    lat: 22.766277,
    long: 75.917252,
  },
  {
    name: "DAV College, Mahoba, Uttar Pradesh, India",
    lat: 25.292242,
    long: 79.874847,
  },
  {
    name: "Pimpri Chinchwad College Of Engineering, Pune, Maharashtra, India",
    lat: 18.651674,
    long: 73.761536,
  },
  {
    name: "IT & Management College, Jhunjhunu, Rajasthan, India",
    lat: 28.119631,
    long: 75.381866,
  },
  {
    name: "Ravoof & Vazir Khan's Memorial College of Education, Srikakulam, Andhra Pradesh, India",
    lat: 18.305754,
    long: 83.907257,
  },
  {
    name: "Government Degree College, Kuntloor, Hyderabad, Telangana, India",
    lat: 17.336731,
    long: 78.612984,
  },
  {
    name: "Theni Kammavar Sangam College of Education, Koduvilarpatty, Tamil Nadu, India",
    lat: 9.981465,
    long: 77.487068,
  },
  {
    name: "Resonance College, Muslim Nagar, Lucknow, Uttar Pradesh, India",
    lat: 26.803862,
    long: 80.897018,
  },
  {
    name: "Bhakura, Bihar, India",
    lat: 25.99811,
    long: 84.791603,
  },
  {
    name: "Murshidabad Institute of Technology, Berhampore, West Bengal, India",
    lat: 24.101789,
    long: 88.284996,
  },
  {
    name: "Himachal Institute of Education, Solan, Himachal Pradesh, India",
    lat: 30.909674,
    long: 77.095245,
  },
  {
    name: "Deoband College of Higher Education, Deoband, Jaipur, India",
    lat: 29.707613,
    long: 77.680359,
  },
  {
    name: "Mukul Industrial Training Center, Rajarpur, Bihar, India",
    lat: 26.36215,
    long: 84.328888,
  },
  {
    name: "The New Polytechnic College, Inamkulathur, Trichy, Tamil Nadu, India",
    lat: 10.704152,
    long: 78.534401,
  },
  {
    name: "Arya College of Pharmacy, Khandi, Patancheru, Telangana, India",
    lat: 17.585157,
    long: 78.117409,
  },
  {
    name: "Khandoli Institute of Technology, At-Dighariakala, PO- Motileda, Dist-Giridih, Jaharkhand, India",
    lat: 24.220886,
    long: 86.337189,
  },
  {
    name: "Sri Jayaram Institute of Engineering and Technology, Elavur, Natham, Gummidipundi, Tamil Nadu, India",
    lat: 13.463804,
    long: 80.139191,
  },
  {
    name: "Shree Venkateshwara Hi-Tech Polytechnic College, Othakuthirai, Gobichettipalayam, Erode Dt, Tamil Nadu, India",
    lat: 11.440657,
    long: 77.498901,
  },
  {
    name: "Thakur Polytechnic, Asha Nagar, Borivali, Mumbai, Maharashtra, India",
    lat: 19.213711,
    long: 72.864906,
  },
  {
    name: "C.K. Shah Vijapurwala Institute of Management, Pratap Nagar, Vadodara, Gujarat, India",
    lat: 22.285612,
    long: 73.20697,
  },
  {
    name: "Amrutvahini Pharmacy College, Sangamner, Maharashtra, India",
    lat: 19.623943,
    long: 74.177635,
  },
  {
    name: "B.P. Poddar Institute of Management & Technology, Kaikhali, Kolkata, West Bengal, India",
    lat: 22.629627,
    long: 88.434555,
  },
  {
    name: "Poosaripatti, Tamil Nadu, India",
    lat: 11.838565,
    long: 78.064484,
  },
  {
    name: "VITAM Engineering College, Visakhapatnam, Andhra Pradesh, India",
    lat: 17.874479,
    long: 83.311127,
  },
  {
    name: "Goalpara College, Goalpara, Assam, India",
    lat: 26.170223,
    long: 90.626617,
  },
  {
    name: "Manipal School of Architecture and Planning, Eshwar Nagar, Manipal, Karnataka, India",
    lat: 13.352585,
    long: 74.793579,
  },
  {
    name: "Nirmal, Telangana, India",
    lat: 19.096413,
    long: 78.342972,
  },
  {
    name: "Hanna College of Education, Gokavaram, Andhra Pradesh, India",
    lat: 17.26424,
    long: 81.854797,
  },
  {
    name: "Omkarananda Institute of Management and Technology, Rishikesh, India",
    lat: 30.123823,
    long: 78.304352,
  },
  {
    name: "Narsinghpur",
    lat: 22.950001,
    long: 79.199997,
  },
  {
    name: "American College, Madurai, Tamil Nadu, India",
    lat: 9.92974,
    long: 78.132103,
  },
  {
    name: "Continental Institute for International Studies, India",
    lat: 30.566622,
    long: 76.459137,
  },
];

var newdata = [];

for (var i = 0; i < data.length; i++) {
  newdata.push({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [data[i].long, data[i].lat],
    },
    properties: {
      name: data[i].name.split(",")[0],
      address: data[i].name.substring(data[i].name.indexOf(",") + 1),
      phone: "+91 " + Math.ceil(Math.random() * 1000000000).toString(),
      "NAAC Grading": `${Math.random() > 0.5 ? "A" : "B"}${
        Math.random() > 0.5 ? "+" : "++"
      }`,
    },
  });
}

// console.log(newdata);
