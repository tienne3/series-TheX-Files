const api = [
  {
    id: "1",
    items: [
      {
        number: 1,
        description:
          "Agent Dana Scully is instructed to debunk an FBI project dubbed “The X-Files,” cases linked to the paranormal that have been reopened by Agent Fox Mulder.",
        name: "Pilot",
        path: "https://img1.hulu.com/user/v3/artwork/c8758588-3d2a-4c24-b050-bcf0d6c72f81?base_image_bucket_name=image_manager&base_image=c53b89ea-c3a3-4ebc-9d63-ef56f79498e0&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "Mulder and Scully investigate the mysterious case of a military test pilot who disappeared after experiencing strange psychotic behavior.",
        name: "Deep Throat",
        path: "https://img1.hulu.com/user/v3/artwork/941419f0-d754-4558-89d9-2edd132e8314?base_image_bucket_name=image_manager&base_image=2713bbb5-9ec2-4c49-9df1-c64d4e920ed6&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "Mulder and Scully search for a humanoid killer whose savage murder spree reoccurs every thirty years.",
        name: "Squeeze",
        path: "https://img2.hulu.com/user/v3/artwork/559f2b1a-dff4-4927-a5ac-64c559ec7f02?base_image_bucket_name=image_manager&base_image=1dddbc1e-6506-40b3-a8ba-19c93b24aa32&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "Mulder becomes obsessed with solving a case that closely parallels an encounter he experienced as a child.",
        name: "Conduit",
        path: "https://img.hulu.com/user/v3/artwork/2a3beda2-c6a4-4d7d-aa7c-ba48ce98df4d?base_image_bucket_name=image_manager&base_image=62d11db0-88bd-4e12-ab49-d76335bd9d05&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "Mulder and Scully track a legendary creature that has roamed the New Jersey countryside for over forty years.",
        name: "Jersey Devil",
        path: "https://img1.hulu.com/user/v3/artwork/015ea3dd-71df-48d1-ab9d-44227b46277e?base_image_bucket_name=image_manager&base_image=ae503aee-6acd-433f-8d77-b249c71cf890&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "Mulder and Scully investigate the deaths of two men believed to have been killed by a powerful psychokinetic force.",
        name: "Shadows",
        path: "https://img3.hulu.com/user/v3/artwork/2353411d-881b-4a04-aaf2-5c71f693feab?base_image_bucket_name=image_manager&base_image=896b83e1-2653-4a43-99e6-66215ddf14ed&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "On Halloween, Mulder and Scully investigate the death of a corporate executive who may have been murdered by a thinking computer.",
        name: "Ghost in the Machine",
        path: "https://img2.hulu.com/user/v3/artwork/4c3081fd-996b-4b63-b321-f07a7ff2478e?base_image_bucket_name=image_manager&base_image=0a6211e5-48e1-4fe2-aa9c-f272657b2c5b&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "Mulder and Scully are sent to investigate when a team of geophysicists stationed at a remote Alaskan outpost is killed by a parasitic alien life form.",
        name: "Ice",
        path: "https://img1.hulu.com/user/v3/artwork/2d210fa1-7ac2-484d-8e4f-87c38de2db98?base_image_bucket_name=image_manager&base_image=42e623d6-60de-4df8-96d8-b70b263007eb&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "When a space shuttle mission is sabotaged, Mulder suspects it may be the work of an evil extraterrestrial spirit that inhabits the body of a former Gemini astronaut.",
        name: "Space",
        path: "https://img2.hulu.com/user/v3/artwork/9ae47c6a-f3c2-4d0c-817a-e9ac5b4cb2f5?base_image_bucket_name=image_manager&base_image=bdd05c19-b35f-4e21-b021-2b916c96977d&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "The future of the X-Files project is jeopardized after Mulder secretly infiltrates the government cover-up of a UFO crash.",
        name: "Fallen Angel",
        path: "https://img4.hulu.com/user/v3/artwork/c1f81441-114c-4388-96f2-d9349eb58659?base_image_bucket_name=image_manager&base_image=00597070-372a-4226-8cb7-0a383400833d&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "Mulder and Scully search for two girls who disappeared after their fathers were murdered in an identical fashion.",
        name: "Eve",
        path: "https://img.hulu.com/user/v3/artwork/e929bd79-63b2-4909-95e4-7a4ed9c38b5c?base_image_bucket_name=image_manager&base_image=7477ff12-2003-464a-9c8b-485fcfa51154&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "Mulder and Scully join forces with an inspector from Scotland Yard when a man with pyrokinetic powers stalks members of the British aristocracy.",
        name: "Fire",
        path: "https://img1.hulu.com/user/v3/artwork/d0b23b44-f0ae-4406-8ce3-1bbb2435cc60?base_image_bucket_name=image_manager&base_image=e24cdfe6-642c-433c-9fd3-bb39f541a0ac&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "Scully believes that the psychic predictions of a death row inmate are the only hope in apprehending a vicious murderer.",
        name: "Beyond the Sea",
        path: "https://img.hulu.com/user/v3/artwork/17db9bbb-aa0e-4973-8099-b277c2bd1312?base_image_bucket_name=image_manager&base_image=5d7fcedb-4ae1-4004-bb76-8a2372ab2d54&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "A religious sect member capable of changing gender becomes the prime suspect in a murder spree.",
        name: "Genderbender",
        path: "https://img1.hulu.com/user/v3/artwork/5054d356-9529-4242-b59f-8ad17bbcc712?base_image_bucket_name=image_manager&base_image=8eb20591-10cb-440c-8e23-8e1044814230&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "The consciousness of a dangerous criminal possesses an FBI agent who is also Scully’s ex-boyfriend.",
        name: "Lazarus",
        path: "https://img3.hulu.com/user/v3/artwork/556083e5-15a2-4477-a327-7b86975250ef?base_image_bucket_name=image_manager&base_image=f51f13dc-0676-4ca5-a3e9-f60d4b014ab4&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "A criminal believed to have died in prison years earlier wages a vendetta against Mulder.",
        name: "Young at Heart",
        path: "https://img4.hulu.com/user/v3/artwork/bd403c85-3239-440b-a698-3a6a0d9f208d?base_image_bucket_name=image_manager&base_image=46bf1532-558c-4413-a563-c4b8e63468eb&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "Mulder and Scully become the focus of a misinformation campaign when they attempt to trace the government’s secret transport of an alien life form.",
        name: "E.B.E.",
        path: "https://img2.hulu.com/user/v3/artwork/72aa14a7-e63f-463a-a1e8-ae82f4d1ed7d?base_image_bucket_name=image_manager&base_image=ac838e8c-da52-4777-b803-3247a57033ec&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "The agents investigate a ministry led by a man whose son possesses the power to heal– and to kill–with a touch of his hand.",
        name: "Miracle Man",
        path: "https://img1.hulu.com/user/v3/artwork/c7026734-19b0-4aa2-8a4d-854eceba686c?base_image_bucket_name=image_manager&base_image=1967a680-46d1-40e6-80ba-7180723d3d6a&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "The agents track a wolflike creature linked to Native American legend.",
        name: "Shapes",
        path: "https://img4.hulu.com/user/v3/artwork/d0e238ec-308a-4014-be93-839264e23661?base_image_bucket_name=image_manager&base_image=72e47b82-6c35-4855-ac71-a99d6296d25d&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "A group of loggers working in a remote forest unearth thousands of deadly insect-like creatures that paralyze -- and then cocoon -- their victims.",
        name: "Darkness Falls",
        path: "https://img1.hulu.com/user/v3/artwork/7b9a0620-60e9-440f-88d5-0886133696ec?base_image_bucket_name=image_manager&base_image=6115ef02-c8ec-446b-88c8-51bda716dc3a&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "Eugene Tooms, a supernatural killer whom Mulder helped incarcerate, is released on parole.",
        name: "Tooms",
        path: "https://img2.hulu.com/user/v3/artwork/4880b615-86c7-4eca-8ab8-f3ed381890f8?base_image_bucket_name=image_manager&base_image=b78eb5d2-ec02-4306-8bac-b65176d69c12&size=600x338&format=jpeg",
      },
      {
        number: 22,
        description:
          "An eight-year-old girl is the prime suspect in a series of bizarre, seemingly unrelated deaths.",
        name: "Born Again",
        path: "https://img.hulu.com/user/v3/artwork/62bd26a0-acd2-4198-91ab-77335956bf73?base_image_bucket_name=image_manager&base_image=b9703581-f108-4749-87d7-301517710bdc&size=600x338&format=jpeg",
      },
      {
        number: 23,
        description:
          "When top scientists at an aeronautics research lab die under mysterious circumstances, the agents suspect a mentally-challenged janitor may somehow be the culprit.",
        name: "Roland",
        path: "https://img4.hulu.com/user/v3/artwork/6f404566-7f82-4fdf-8b07-683847edb9a7?base_image_bucket_name=image_manager&base_image=b43eca36-d370-4cd8-aa31-c84484db7be8&size=600x338&format=jpeg",
      },
      {
        number: 24,
        description:
          "Deep Throat tips Mulder to a critically important case involving a missing fugitive and the cloning of extraterrestrial viruses.",
        name: "Erlenmeyer Flask",
        path: "https://img3.hulu.com/user/v3/artwork/4efed695-a472-4ee5-911c-f924e571468f?base_image_bucket_name=image_manager&base_image=05dc1ef0-194d-4b91-be0b-7278d42387d1&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "2",
    items: [
      {
        number: 1,
        description:
          "Mulder travels to Puerto Rico in advance of a Beret team out to destroy evidence of an extraterrestrial encounter.",
        name: "Little Green Men",
        path: "https://img.hulu.com/user/v3/artwork/d3304f96-7588-4889-843c-7e356feeca72?base_image_bucket_name=image_manager&base_image=4bd344d9-003e-43d5-a24f-41ec58f37482&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "Mulder pursues a humanoid, parasitic organism that uses sewage systems as its home.",
        name: "The Host",
        path: "https://img2.hulu.com/user/v3/artwork/49949eec-659d-4674-a514-108dccf6246a?base_image_bucket_name=image_manager&base_image=ab4e0541-de3f-4f85-b105-e80b1bb810d2&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "Mulder and Scully investigate a series of violent killings committed by seemingly normal residents of a small town.",
        name: "Blood",
        path: "https://img.hulu.com/user/v3/artwork/d5798053-a5bd-42a6-bb65-76d7928e4d76?base_image_bucket_name=image_manager&base_image=c5b7ba54-bac5-4b85-a3b6-a129e45d2f1d&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "Mulder searches for a Vietnam vet who can project his consciousness into other people’s minds.",
        name: "Sleepless",
        path: "https://img2.hulu.com/user/v3/artwork/230695bd-0c23-46ce-ba01-21e5b45ed9b7?base_image_bucket_name=image_manager&base_image=8f3a0d86-1485-4532-8864-97024a8efb89&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "A former FBI agent who claims he was abducted by aliens takes several people hostage.",
        name: "Duane Barry",
        path: "https://img2.hulu.com/user/v3/artwork/35f85169-9b35-4bb4-b13d-7dde660eadc1?base_image_bucket_name=image_manager&base_image=02c777d1-86f8-433e-98fe-feac93e6d953&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "Mulder attempts to rescue Scully after she is abducted by a deranged man who believes in UFOs.",
        name: "Ascension",
        path: "https://img2.hulu.com/user/v3/artwork/926c4551-ccdb-4891-8a24-82797107c732?base_image_bucket_name=image_manager&base_image=4a472864-4824-4678-89e0-d187d296b5c0&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "Mulder links a series of grisly deaths to a group of modern-day vampires.",
        name: "3",
        path: "https://img4.hulu.com/user/v3/artwork/b98f214a-a7a0-4f0a-9544-2c5ea501b398?base_image_bucket_name=image_manager&base_image=bd39639d-e499-456a-bee9-efaff5b8f293&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "When Scully’s comatose body is discovered at a local hospital, Mulder suspects the government was responsible for her disappearance.",
        name: "One Breath",
        path: "https://img4.hulu.com/user/v3/artwork/c26b05c6-9253-4116-abce-22c2a8ea49e5?base_image_bucket_name=image_manager&base_image=e4719c2c-e210-4510-8a7f-f79ad4d02674&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "A parasitic silicon-based life form is discovered by a team of scientists researching a volcano.",
        name: "Firewalker",
        path: "https://img3.hulu.com/user/v3/artwork/ef988634-6d93-4f3c-92a2-7b8725cdeaa4?base_image_bucket_name=image_manager&base_image=74ec0977-ac8b-402c-8605-508f0a5ca79a&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "Cattle ranchers in a remote Wisconsin town suspect a religious cult is to blame when local teenagers are drugged and abducted.",
        name: "Red Museum",
        path: "https://img2.hulu.com/user/v3/artwork/da1a81e2-916b-4b10-b686-1f69405b2794?base_image_bucket_name=image_manager&base_image=5d84108f-0c07-4ccf-a096-b9fd87ea71e2&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "A series of violent attacks at a convalescent home are linked to angry spirits from beyond the grave.",
        name: "Excelsius Dei",
        path: "https://img1.hulu.com/user/v3/artwork/dc7f8057-3fa1-4733-95bc-401affddcae3?base_image_bucket_name=image_manager&base_image=0a7010b8-39cf-415f-8ded-e24ec5a55899&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "A pregnant woman experiences visions of serial killings that span half a century.",
        name: "Aubrey",
        path: "https://img4.hulu.com/user/v3/artwork/2adcaafa-2d14-4b68-af08-6f7a0891a015?base_image_bucket_name=image_manager&base_image=71e55621-e4b7-445e-b99c-4c4700ec59b7&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "Scully and Mulder hunt down a fetishist who collects pieces of the dead.",
        name: "Irresistible",
        path: "https://img3.hulu.com/user/v3/artwork/e8680fd8-25a1-4e6e-a140-dc21811295a0?base_image_bucket_name=image_manager&base_image=d5d61935-3c6d-43f9-89a7-2e082f4397f7&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "The agents investigate a murder in a small town populated by devil worshipers.",
        name: "Die Hand Die Verletzt",
        path: "https://img.hulu.com/user/v3/artwork/676879b2-ad06-4633-9693-72db8eb2dd7a?base_image_bucket_name=image_manager&base_image=d38bcb51-2453-4b0a-955b-8e6212f942e6&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "Mulder suspects that a voodoo curse caused the deaths of two Marines stationed at a Haitian refugee camp.",
        name: "Fresh Bones",
        path: "https://img3.hulu.com/user/v3/artwork/71b2bea0-8406-407f-a0e9-cbfe3e5f31c5?base_image_bucket_name=image_manager&base_image=701b21d3-fd85-4821-97c3-84af2f997586&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "As Mulder searches for a killer capable of altering his shape, a woman who claims to be his long-lost sister suddenly appears.",
        name: "Colony",
        path: "https://img3.hulu.com/user/v3/artwork/fba5afcb-9c19-413e-b2ee-38f0d2b438bb?base_image_bucket_name=image_manager&base_image=7b644875-a30d-4e86-8faf-4186a5ee466b&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "Mulder attempts to catch an alien bounty hunter who holds the key to his sister’s where-abouts.",
        name: "End Game",
        path: "https://img.hulu.com/user/v3/artwork/6d47e85d-67d4-4a54-94ba-e3c90eae52dd?base_image_bucket_name=image_manager&base_image=22571c02-2b16-41fa-b292-aa3403b305d1&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "Animals from a zoo in Idaho are suspected of killing several people, but witnesses claim the real culprit is a powerful invisible force.",
        name: "Fearful Symmetry",
        path: "https://img4.hulu.com/user/v3/artwork/04fa55a0-358f-4bc0-8b07-35a40c9aa617?base_image_bucket_name=image_manager&base_image=2ed4fc45-ee3a-4b65-939f-d5575677ea31&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "The agents become stranded aboard a ship where the human aging process is greatly accelerated.",
        name: "Død Kalm",
        path: "https://img2.hulu.com/user/v3/artwork/7b1d7b0b-c043-40fb-b182-a001b18574c0?base_image_bucket_name=image_manager&base_image=9535267d-fc1e-4239-89a1-5242c5d468c8&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "The agents search for a killer in a Florida town inhabited by side-show performers.",
        name: "Humbug",
        path: "https://img4.hulu.com/user/v3/artwork/5805486b-f0f5-4e97-97b1-bf17df790a1c?base_image_bucket_name=image_manager&base_image=bdc3036b-9812-4479-9475-b85fac2ac461&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "The agents investigate when a young boy’s family is plagued by several tragic accidents.",
        name: "Calusari",
        path: "https://img3.hulu.com/user/v3/artwork/fdc13fb1-6121-4a61-a59a-241bc7aee2dd?base_image_bucket_name=image_manager&base_image=b9bae58c-dd58-445c-838b-9e796dc232c2&size=600x338&format=jpeg",
      },
      {
        number: 22,
        description:
          "As Scully investigates the spread of a deadly contagion at a prison, Mulder tracks down two escaped convicts infected with the disease.",
        name: "F. Emasculata",
        path: "https://img4.hulu.com/user/v3/artwork/a92a3662-7d65-4456-a53f-c1e1ba9a27a3?base_image_bucket_name=image_manager&base_image=29148b59-435f-4b46-8821-6d364257a172&size=600x338&format=jpeg",
      },
      {
        number: 23,
        description:
          "The agents hunt down a scientist who is literally afraid of his own shadow.",
        name: "Soft Light",
        path: "https://img4.hulu.com/user/v3/artwork/1de4d830-89b0-4549-b66a-7a3e51ede7b9?base_image_bucket_name=image_manager&base_image=c944f357-0c93-46c8-a8c9-0ba0ffe3136d&size=600x338&format=jpeg",
      },
      {
        number: 24,
        description:
          "A meat processing plant comes under scrutiny after several people mysteriously disappear from a small town.",
        name: "Our Town",
        path: "https://img.hulu.com/user/v3/artwork/35178c12-976e-4f5b-acc0-17d90b8f9301?base_image_bucket_name=image_manager&base_image=129d2555-ab6b-4d35-84f0-27e36424e598&size=600x338&format=jpeg",
      },
      {
        number: 25,
        description:
          "Mulder receives an encrypted computer disk containing the Defense Department’s top secret files on extraterrestrial life.",
        name: "Anasazi",
        path: "https://img4.hulu.com/user/v3/artwork/6f46b258-4536-4427-93f3-f0a9313f16f5?base_image_bucket_name=image_manager&base_image=ed23808a-bab8-4d2a-b3ef-d5e078f06e80&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "3",
    items: [
      {
        number: 1,
        description:
          "As Scully faces possible dismissal from the F.B.I., a manhunt ensues for the missing Agent Mulder.",
        name: "The Blessing Way",
        path: "https://img3.hulu.com/user/v3/artwork/08a9826e-0971-4fab-bd5a-914971453f88?base_image_bucket_name=image_manager&base_image=83b8c612-2239-4a66-9a26-087070b36b63&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "As a government hit squad closes in on the agents, Mulder searches for clues about his father’s involvement in a secret project.",
        name: "Paper Clip",
        path: "https://img4.hulu.com/user/v3/artwork/7f41c0bf-26ea-4518-b744-de349f803afc?base_image_bucket_name=image_manager&base_image=a1a14a2d-93b6-467b-99b0-6026e598309f&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "The agents investigate the deaths of several young people who were apparently struck by lightning in the same small town.",
        name: "D.P.O.",
        path: "https://img4.hulu.com/user/v3/artwork/307fe92a-6cc2-48eb-98c2-a324ad9c8f32?base_image_bucket_name=image_manager&base_image=bdb0d998-2ff0-4193-9c7b-9b45fd14edee&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "A man with psychic powers assists the agents with the hunt for a killer.",
        name: "Clyde Bruckman's Final Repose",
        path: "https://img4.hulu.com/user/v3/artwork/117c62f6-f2a0-4685-8caa-4b8f0fa04f06?base_image_bucket_name=image_manager&base_image=eec14e6c-6a04-4735-a0c4-57d9d9bdb7f6&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "Enemies of a prison inmate who died in the electric chair begin dying one by one.",
        name: "The List",
        path: "https://img.hulu.com/user/v3/artwork/6187806d-fe33-40eb-bf29-6bf6c493a0b8?base_image_bucket_name=image_manager&base_image=75a4f330-5be2-4b53-8388-f891d334db5b&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "The agents hunt for a killer who uses the Internet to attract his victims.",
        name: "2Shy",
        path: "https://img1.hulu.com/user/v3/artwork/565e36ec-8341-4708-9217-7c200322fe5e?base_image_bucket_name=image_manager&base_image=f0552a66-971f-44c6-9197-0cad3e85a54c&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "A quadruple amputee becomes the prime suspect in a series of bizarre deaths.",
        name: "The Walk",
        path: "https://img2.hulu.com/user/v3/artwork/ea353191-6e1f-497c-a51d-680d14f65dec?base_image_bucket_name=image_manager&base_image=e827e9f8-5508-47d4-a58f-2bd31be878f6&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "A woman experiences a psychic connection with a teenager held captive by a deranged man.",
        name: "Oubliette",
        path: "https://img4.hulu.com/user/v3/artwork/1bf8d873-77b3-49fc-b828-52d1b2bb47a4?base_image_bucket_name=image_manager&base_image=20a2a4ee-74d0-40b1-a7cf-7130989596a9&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "An “alien autopsy” videotape and a Japanese diplomat’s murder spark Mulder’s search for a strange creature aboard a train. Scully encounters a group of people who reveal information about her disappearance.",
        name: "Nisei",
        path: "https://img4.hulu.com/user/v3/artwork/d560bc1e-16bb-4a42-ba23-0e4daabfba32?base_image_bucket_name=image_manager&base_image=9264689a-c669-4940-bfb7-a717776df973&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "When Mulder becomes trapped aboard a train rigged with an explosive device, Scully searches for the truth behind the government’s involvement with secret experiments.",
        name: "731",
        path: "https://img1.hulu.com/user/v3/artwork/282c903a-1d8c-4f23-9f7c-b029b57355d6?base_image_bucket_name=image_manager&base_image=3d29a501-f44d-41ec-ac16-fafdbbfba0cd&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "Scully attempts to protect a boy whose death could trigger the coming of Armageddon.",
        name: "Revelations",
        path: "https://img1.hulu.com/user/v3/artwork/587a2bd5-8379-4c5d-9e30-5bc8f4424ade?base_image_bucket_name=image_manager&base_image=0a7240e5-05fa-4b1a-b429-dfa320f5d393&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "The agents come to the aid of a town seemingly under attack by killer cockroaches.",
        name: "War of the Coprophages",
        path: "https://img.hulu.com/user/v3/artwork/4215456d-07d5-4eed-956a-996d575c33f3?base_image_bucket_name=image_manager&base_image=3026df29-c966-4c33-b21c-99fe122639de&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "A rare alignment of the planets gives two teenage girls dangerous telekinetic powers.",
        name: "Syzygy",
        path: "https://img2.hulu.com/user/v3/artwork/5f6d861c-b959-4013-9637-bee9f602815b?base_image_bucket_name=image_manager&base_image=e575d91e-8811-402f-8fc5-60acae274eea&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "Mulder becomes obsessed with a case involving an incarcerated serial killer who claims he was possessed by a gargoyle.",
        name: "Grotesque",
        path: "https://img1.hulu.com/user/v3/artwork/988e5d5f-d38f-4048-9462-be0a4e7040e7?base_image_bucket_name=image_manager&base_image=14edc887-7821-4124-a233-357be4fe60cc&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "The agents investigate the mystery surrounding a sunken World War II aircraft.",
        name: "Piper Maru",
        path: "https://img.hulu.com/user/v3/artwork/670b168b-faa1-478d-b76d-59192ad5ad43?base_image_bucket_name=image_manager&base_image=5aed9caa-e103-45fb-a2a6-60ffedd8341f&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "Mulder uncovers more clues about a government cover-up involving an alien entity and a sunken World War II aircraft. Scully pursues the man who murdered her sister.",
        name: "Apocrypha",
        path: "https://img2.hulu.com/user/v3/artwork/9f4afa02-98b4-4569-a471-ce36698dfc96?base_image_bucket_name=image_manager&base_image=f2246fbd-dd0e-4b82-a9df-0a73fa4e80fd&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "The agents play a deadly game of cat-and-mouse with a killer who can control people’s minds.",
        name: "Pusher",
        path: "https://img.hulu.com/user/v3/artwork/321d0e41-9f35-42d7-b11c-e16b6d23c31c?base_image_bucket_name=image_manager&base_image=4a2eddb9-1c20-49b8-8cd5-f2acf59bfce0&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "A curse befalls members of an archeological team after a sacred urn is excavated in South America and transported to a Boston museum.",
        name: "Teso Dos Bichos",
        path: "https://img3.hulu.com/user/v3/artwork/e0ba9ea5-5500-4615-baf3-68289ccdb98c?base_image_bucket_name=image_manager&base_image=68b0bb7e-4926-41ff-9381-b50577745279&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "The agents investigate a deadly game in San Francisco’s Chinatown district.",
        name: "Hell Money",
        path: "https://img2.hulu.com/user/v3/artwork/e9b4826c-e9a1-4933-b39a-1b28e2c8e68a?base_image_bucket_name=image_manager&base_image=8fc013bb-34fd-4fce-9cbc-bad7eff4dfb3&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "Scully recounts the investigation of an alleged UFO encouter for a famous author researching his latest novel.",
        name: "Jose Chung from Outer Space",
        path: "https://img2.hulu.com/user/v3/artwork/571a40cb-bb14-4be2-a997-37749ba608c1?base_image_bucket_name=image_manager&base_image=898145d0-baa4-44f8-873e-f39688a605aa&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "Skinner becomes the prime suspect in the murder of a prostitute.",
        name: "Avatar",
        path: "https://img2.hulu.com/user/v3/artwork/127da9fb-4830-4ca2-b3c6-9cfc92d51f2d?base_image_bucket_name=image_manager&base_image=b4360e6d-a580-494a-a719-ced0cf19a44b&size=600x338&format=jpeg",
      },
      {
        number: 22,
        description:
          "Mulder suspects that a beast similar to the Loch Ness monster is responsible for the deaths of several people who reside near a large lake.",
        name: "Quagmire",
        path: "https://img3.hulu.com/user/v3/artwork/3d5899e2-77d9-4a40-88ed-94a6bcb70a16?base_image_bucket_name=image_manager&base_image=cb2dfa77-ffb3-4198-a60b-faf9545e1704&size=600x338&format=jpeg",
      },
      {
        number: 23,
        description:
          "The agents investigate a series of murders linked to a device that alters television signals.",
        name: "Wetwired",
        path: "https://img.hulu.com/user/v3/artwork/4fedce97-32b1-4416-8b20-9537cfc17f1b?base_image_bucket_name=image_manager&base_image=1259fa47-2bab-4ac8-97c8-14654ad376f1&size=600x338&format=jpeg",
      },
      {
        number: 24,
        description:
          "After his mother suffers a stroke, Mulder searches for an alien being who possesses miraculous healing powers.",
        name: "Talitha Cumi",
        path: "https://img2.hulu.com/user/v3/artwork/af25ef49-f3c4-42c7-9a2b-4ce5ee4bd5f9?base_image_bucket_name=image_manager&base_image=5db19dbe-68bc-4cd3-9247-8571698824d4&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "4",
    items: [
      {
        number: 1,
        description:
          "As the alien Bounty Hunter continues his relentless pursuit, Mulder encounters puzzling new evidence regarding his sister.",
        name: "Herrenvolk",
        path: "https://img3.hulu.com/user/v3/artwork/aa23cabd-7986-4679-923b-012f8c86a4d2?base_image_bucket_name=image_manager&base_image=f4f42ac1-3614-4962-a79a-5c0c5281a107&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "The agents encounter a family of inbred, animal-like brothers living on a farm in a remote section of Pennsylvania.",
        name: "Home",
        path: "https://img.hulu.com/user/v3/artwork/d3a27b68-ba08-4eb4-abef-cc0f35db18c1?base_image_bucket_name=image_manager&base_image=96fabf5e-3d17-4c93-8006-9172d7af4d8f&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "Mulder believes a creature from an African folktale may be responsible for the disappearance of several black men in the Philadelphia area.",
        name: "Teliko",
        path: "https://img.hulu.com/user/v3/artwork/3c26d459-915b-4059-b6e2-72a6a1431dd0?base_image_bucket_name=image_manager&base_image=061edcac-d208-434f-b8c1-a741def61f74&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "The agents hunt for a kidnapper whose mind’s eye is captured on film.",
        name: "Unruhe",
        path: "https://img4.hulu.com/user/v3/artwork/05ee3837-0277-4c3e-a72c-ae6ade1cce7b?base_image_bucket_name=image_manager&base_image=06853171-ff43-44a9-ad4d-4ef3928c0293&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "A woman with multiple personalities—whom Mulder believes is the reincarnation of a love from a past life—plays a key role in the FBI’s efforts to disarm a religious cult leader.",
        name: "The Field Where I Died",
        path: "https://img4.hulu.com/user/v3/artwork/a292d3b0-3b56-42f7-bc14-14f5ea54be1c?base_image_bucket_name=image_manager&base_image=29940536-e115-4628-97c5-1f098f21ce92&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "Patients undergoing cosmetic surgery die horrible deaths at the hands of doctors possessed by witchcraft.",
        name: "Sanguinarium",
        path: "https://img3.hulu.com/user/v3/artwork/73d51121-10c4-44b2-b041-fecb2363aff1?base_image_bucket_name=image_manager&base_image=cd84ea79-b200-41a8-ae88-52e801e04fda&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "A Lone Gunmen member is targeted for extermination after he uncovers information linking the Cancer Man to several assassinations.",
        name: "Musings of a Cigarette-Smoking Man",
        path: "https://img1.hulu.com/user/v3/artwork/91fc87a4-1a2c-4247-91b4-7c36ace7493e?base_image_bucket_name=image_manager&base_image=40863956-557b-486b-b124-16169a5ef587&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "A tip from Krycek leads Mulder and Scully to a Martian meteorite fragment containing an alien life form.",
        name: "Tunguska",
        path: "https://img2.hulu.com/user/v3/artwork/9c8c17f5-68c1-4fb1-92fd-81dfb59526c7?base_image_bucket_name=image_manager&base_image=9ec8e2b7-067a-487d-b18d-b6c002380d6c&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "Mulder escapes from a Russian gulag and uncovers more clues pertaining to a mysterious meteorite fragment. Scully is jailed after she refuses to cooperate with a Senate Subcommittee hearing.",
        name: "Terma",
        path: "https://img4.hulu.com/user/v3/artwork/9885894c-16f5-4452-b65a-906d5f4699c9?base_image_bucket_name=image_manager&base_image=b87c06ef-e5db-4257-a396-7183d7cf8475&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "An incarcerated serial killer claims Mulder’s sister was one of his many victims.",
        name: "Paper Hearts",
        path: "https://img4.hulu.com/user/v3/artwork/ffcc77c7-f327-4f59-9291-60b7b62a8ec2?base_image_bucket_name=image_manager&base_image=254a446a-ab69-4bab-bb74-e9250f5ffbe6&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "A community of migrant workers attributes several strange deaths to El Chupacabra—a creature straight out of Mexican folklore.",
        name: "El Mundo Gira",
        path: "https://img.hulu.com/user/v3/artwork/a505efc1-d462-4408-bcdd-928ba016a73f?base_image_bucket_name=image_manager&base_image=14790f6b-1061-47f6-abb0-0c8c3527f195&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "A headless corpse walks out of a hospital morgue—triggering the search for a highly-evolved humanoid life form that possesses unimaginable regenerative powers.",
        name: "Leonard Betts",
        path: "https://img3.hulu.com/user/v3/artwork/0a153a60-a77e-48d5-8e08-7e0f381dae65?base_image_bucket_name=image_manager&base_image=beeb4640-e1e9-441b-a5ec-bf82363425af&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "While Mulder is vacationing, Scully finds herself attracted to a handsome divorcee whose Betty Page-like tattoo seemingly has a mind of its own.",
        name: "Never Again",
        path: "https://img3.hulu.com/user/v3/artwork/30d7d8fc-ae67-4d2a-b526-bdf614860ef9?base_image_bucket_name=image_manager&base_image=f15cf2da-aed9-4b3c-81f5-36765f1df218&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "When Scully is diagnosed with cancer, Mulder hunts for research files pertaining to a group of female abductees who also contracted the disease.",
        name: "Memento Mori",
        path: "https://img1.hulu.com/user/v3/artwork/f3a2f201-c27e-42bf-a621-45a3a4341f92?base_image_bucket_name=image_manager&base_image=71f0771c-d0df-42eb-b2de-7d87b109a99d&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "Mulder suspects that a Golem, a man-made monster described in Jewish folklore, may be responsible for the deaths of several hate-mongers who murdered a Jewish man.",
        name: "Kaddish",
        path: "https://img4.hulu.com/user/v3/artwork/d494fe70-b95a-40c7-9b68-8038ac4d8dfd?base_image_bucket_name=image_manager&base_image=0a4217d8-2e85-4065-a466-43fdf48ce798&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "A seemingly invisible Vietnam vet begins killing the military’s top brass.",
        name: "Unrequited",
        path: "https://img.hulu.com/user/v3/artwork/2d5cac09-9633-4688-b9ec-8250a374c616?base_image_bucket_name=image_manager&base_image=f9b1b543-1a8b-41b8-85b7-5208b07eb4d2&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "The agents investigate the apparent downing of a commercial jetliner by a UFO.",
        name: "Tempus Fugit",
        path: "https://img.hulu.com/user/v3/artwork/04f39205-8bef-4ef6-bdc5-5417b6c4e077?base_image_bucket_name=image_manager&base_image=b0d67b4a-c414-4e70-804b-549b8ca79d6f&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "As the investigation into the crash of a commercial airliner continues...Mulder is placed under military arrest after he discovers the existence of a UFO crash site. Scully mourns the loss of a fellow agent.",
        name: "Max",
        path: "https://img1.hulu.com/user/v3/artwork/731f3dc2-21fb-4dd5-b6b6-6a8a7e879ca2?base_image_bucket_name=image_manager&base_image=17f1ea73-8341-4582-8adf-0ec9fa719b2e&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "The agents search for answers when an elderly man uses a technology of the future to commit murder.",
        name: "Synchrony",
        path: "https://img.hulu.com/user/v3/artwork/35b28dd8-f1a3-4b04-bafe-9693d98057d0?base_image_bucket_name=image_manager&base_image=49e1524f-ff16-44bc-a2b5-39b72600c518&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "The agents search for a man who possesses the ability to change form.",
        name: "Small Potatoes",
        path: "https://img1.hulu.com/user/v3/artwork/4d6e8e5d-c928-4340-a95f-576b1e03a3f7?base_image_bucket_name=image_manager&base_image=a506dc87-3971-40be-a174-69cf590e0cc0&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "Skinner is framed for murder after he covers-up the death of a young woman who was attacked by a swarm of bees.",
        name: "Zero Sum",
        path: "https://img3.hulu.com/user/v3/artwork/885d5e0d-f599-4fdd-a495-79806b4ad2ad?base_image_bucket_name=image_manager&base_image=59d8c7c1-2f4a-42e0-a0c4-c4d1ee2dbf79&size=600x338&format=jpeg",
      },
      {
        number: 22,
        description:
          "The agents suspect a mentally-disturbed man is connected to the deaths of several girls whose spirits attempted to make contact with the living.",
        name: "Elegy",
        path: "https://img.hulu.com/user/v3/artwork/12ccd0c6-7851-48df-af20-03af6b0a2e71?base_image_bucket_name=image_manager&base_image=0dd3340f-5430-41a3-9942-08afa6d56414&size=600x338&format=jpeg",
      },
      {
        number: 23,
        description:
          "Mulder becomes the prime suspect in an apparent double homicide.",
        name: "Demons",
        path: "https://img2.hulu.com/user/v3/artwork/6383a8f4-c277-4d45-aa13-bd476128af1f?base_image_bucket_name=image_manager&base_image=87be2e35-b5fa-42f3-a234-611646606cbe&size=600x338&format=jpeg",
      },
      {
        number: 24,
        description:
          "Mulder and Scully search for the truth when an anthropologist discovers what could be the frozen remains of extraterrestrial life.",
        name: "Gethsemane",
        path: "https://img2.hulu.com/user/v3/artwork/5337a41d-f9e3-4216-85e0-9a8112718852?base_image_bucket_name=image_manager&base_image=a9a45aa0-096d-4cdb-b58e-f15d7a5802c3&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "5",
    items: [
      {
        number: 1,
        description:
          "Mulder accesses a secret research facility that may hold a cure for Scully’s illness. Meanwhile, Scully performs an experiment in hopes of determining the origin of the disease.",
        name: "Redux, Part 1",
        path: "https://img3.hulu.com/user/v3/artwork/6ddf74af-4535-47a9-9c4c-bccff45acbc4?base_image_bucket_name=image_manager&base_image=b1c172d8-e466-43b6-91ee-8cea963e24b0&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "As Mulder continues his search for a cure for Scully’s illness -- and the identity of a mole operating from within the Bureau -- he receives help from a most unlikely source.",
        name: "Redux, Part 2",
        path: "https://img3.hulu.com/user/v3/artwork/bc380a26-51f6-45be-a6d9-7f777278835a?base_image_bucket_name=image_manager&base_image=42015d69-cdaa-470d-bcdb-0c658b3fb515&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "In 1989, the Lone Gunmen meet for the very first time when they assist a woman who claims the government plans to use civilians as guinea pigs in a secret experiment.",
        name: "Unusual Suspects",
        path: "https://img2.hulu.com/user/v3/artwork/e3862e0a-ac03-41a6-9973-f1c93e0ebfe8?base_image_bucket_name=image_manager&base_image=c332cb39-a6d9-4cf3-b940-ff55542a1c69&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "The agents investigate when several people disappear in a remote region of Florida.",
        name: "Detour",
        path: "https://img.hulu.com/user/v3/artwork/2aba7ab8-36d9-4cb4-89c1-d676cca9195d?base_image_bucket_name=image_manager&base_image=c5d02952-4aee-403a-adb3-5f4d6e699d9e&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "Townspeople in rural Indiana believe a Frankenstein-like creature roams the countryside.",
        name: "The Post-Modern Prometheus",
        path: "https://img1.hulu.com/user/v3/artwork/af982232-cce4-45c6-a0ca-8f3f54f2d0d6?base_image_bucket_name=image_manager&base_image=a792b671-f708-4d1e-95c6-6e5db11a6b12&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "A mysterious phone call and an apparent suicide lead Scully to a young girl who she suspects is her sister Melissa’s daughter.",
        name: "Christmas Carol",
        path: "https://img3.hulu.com/user/v3/artwork/933d4a7a-9875-42ab-9975-5c65babf8ead?base_image_bucket_name=image_manager&base_image=554cc574-4881-4191-8714-9f97df99ced1&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description: "Scully and Mulder search for a cure to Emily’s illness.",
        name: "Emily",
        path: "https://img2.hulu.com/user/v3/artwork/53688934-579c-44c3-b669-6b7b55863877?base_image_bucket_name=image_manager&base_image=e58d13a0-9013-4138-a464-63dbe6f2142a&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "Mulder and Scully hunt for Robert Modell, a.k.a. Pusher, after he escapes from prison.",
        name: "Kitsunegari",
        path: "https://img4.hulu.com/user/v3/artwork/19ea45ba-7c8b-47d8-a8ce-158009c53d66?base_image_bucket_name=image_manager&base_image=3bdbf2d6-3374-4b02-9442-2947c8e2301d&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "A teenage boy undergoing psychological counseling becomes the prime suspect in his stepfather’s murder.",
        name: "Schizogeny",
        path: "https://img3.hulu.com/user/v3/artwork/9805d860-d89e-44f0-894a-67768aea8aab?base_image_bucket_name=image_manager&base_image=21fff28c-323c-4342-a323-b1b20b7ed683&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "Residents of a seacoast town in Maine are terrorized by a little girl and her doll.",
        name: "Chinga",
        path: "https://img2.hulu.com/user/v3/artwork/b50735dd-4976-4f14-acd8-b6c98aa57f47?base_image_bucket_name=image_manager&base_image=710d40a0-9035-4de3-a7db-07c5e4ff8dbf&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "A sentient computer program targets its creators for extinction.",
        name: "Kill Switch",
        path: "https://img2.hulu.com/user/v3/artwork/f7183181-d359-47ff-8509-6d2d2e7406be?base_image_bucket_name=image_manager&base_image=ed4034b6-42f9-4b9d-9c49-de391f55ad4f&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "The agents recount their versions of events that led to the killing of a teenager suspected of being a vampire.",
        name: "Bad Blood",
        path: "https://img1.hulu.com/user/v3/artwork/77646628-ce83-46ff-9247-d9c2be964bf1?base_image_bucket_name=image_manager&base_image=42e1a144-bf81-4825-818f-c997acd80317&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "The agents search for answers when UFO abductees gather en masse—and are burned alive.",
        name: "Patient X",
        path: "https://img3.hulu.com/user/v3/artwork/6d0330c8-622c-4c37-b2be-6b724099b965?base_image_bucket_name=image_manager&base_image=d1b15559-c9ef-444d-9fdc-8c82f30caa75&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "Scully undergoes hypnosis in an effort to remember what happened at the mass burning site.",
        name: "The Red and the Black",
        path: "https://img1.hulu.com/user/v3/artwork/54379260-30b0-4ce3-ad79-6589a8400d9c?base_image_bucket_name=image_manager&base_image=34d65b5f-d2a4-4251-801b-1f4311f5c2a1&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "In the 1950s, two FBI agents investigate strange deaths somehow linked to Mulder’s father.",
        name: "Travelers",
        path: "https://img1.hulu.com/user/v3/artwork/5dfc3328-c2ad-4279-80f3-f4a17db6fbc6?base_image_bucket_name=image_manager&base_image=b79d27ea-9121-4e7c-acc2-0058a815aea3&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "Mulder suspects a blind woman possesses the ability to see through the eyes of a killer.",
        name: "Mind's Eye",
        path: "https://img2.hulu.com/user/v3/artwork/58b9ee85-8cb6-4f3b-b378-09879bd9db05?base_image_bucket_name=image_manager&base_image=c3d1b327-634d-412b-9b4b-1d7f78d2b7ea&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "A priest asks for Scully’s help when a handicapped girl dies a mysterious death.",
        name: "All Souls",
        path: "https://img4.hulu.com/user/v3/artwork/91358926-fafc-4c42-b39d-58e75f138c77?base_image_bucket_name=image_manager&base_image=9f7074f9-6175-41fc-b5cd-7c188962efc7&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "Mulder goes undercover to infiltrate a militia group armed with a deadly pathogen.",
        name: "The Pine Bluff Variant",
        path: "https://img3.hulu.com/user/v3/artwork/935d600a-52d9-44f8-a29a-db60238e9643?base_image_bucket_name=image_manager&base_image=e9796f1e-708b-46f1-a3c9-e3ece445a5db&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "Mulder is taken hostage by a man who claims his boss is literally a monster.",
        name: "Folie a Deux",
        path: "https://img.hulu.com/user/v3/artwork/5c5885fd-7472-4c6b-b08f-c1194df43dbc?base_image_bucket_name=image_manager&base_image=0de84fcc-2e1c-4adc-a263-9fccdde0b15a&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "A boy possessing psychic powers may hold the key to unlocking the mysteries of the X-Files.",
        name: "The End",
        path: "https://img2.hulu.com/user/v3/artwork/6ad943b1-048c-4c8a-a207-ea31cd6e64ae?base_image_bucket_name=image_manager&base_image=dc1753b4-50ea-49f6-a925-c7bdd2c06048&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "6",
    items: [
      {
        number: 1,
        description:
          "As a review panel probes Mulder’s claims regarding the existence of aliens and a government conspiracy, the agents hunt down a deadly extraterrestrial creature.",
        name: "The Beginning",
        path: "https://img4.hulu.com/user/v3/artwork/f3ce32b5-02e6-4aa1-88ed-c3487f588435?base_image_bucket_name=image_manager&base_image=fcb0200f-fdbe-4517-bb06-a7dc09203444&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "An armed man infected with a deadly pathogen climbs into Mulder’s car and instructs the agent to keep the vehicle in constant motion.",
        name: "Drive",
        path: "https://img2.hulu.com/user/v3/artwork/b8facef3-3985-4297-8d2a-85c04435caf7?base_image_bucket_name=image_manager&base_image=badf57e6-96ad-45ae-bfb8-5662dcda3011&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "A time warp in the Bermuda Triangle traps Agent Mulder aboard a 1939 luxury liner filled with murderous Nazis…and some familiar faces.",
        name: "Triangle",
        path: "https://img.hulu.com/user/v3/artwork/c8d3d78c-5e23-4d1b-b80c-3f018f316b32?base_image_bucket_name=image_manager&base_image=2ffc5822-4a7f-446e-b6ec-56fa9e6bfd10&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "A bizarre occurrence at the infamous “Area 51” swaps Mulder’s consciousness with that of a stranger.",
        name: "Dreamland, Part 1",
        path: "https://img1.hulu.com/user/v3/artwork/b31c8169-8d37-4601-831e-98fbe0f78239?base_image_bucket_name=image_manager&base_image=fc1ed665-7650-4ff9-b648-8c05e33760c0&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "Scully searches for a way to reverse the process that caused Mulder and Morris Fletcher to swap identities.",
        name: "Dreamland, Part 2",
        path: "https://img.hulu.com/user/v3/artwork/cee133ee-de97-4a99-b778-c471ccb64374?base_image_bucket_name=image_manager&base_image=6e23a1e1-2c50-4fbf-8f87-cbb3e783e350&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "On Christmas Eve, Mulder and Scully find themselves trapped in a haunted house with two ghosts who are determined to prove just how lonely the holiday can be.",
        name: "How the Ghosts Stole Christmas",
        path: "https://img3.hulu.com/user/v3/artwork/6802989d-f81d-469e-a6ca-29261b07e03d?base_image_bucket_name=image_manager&base_image=e84fe763-fb67-47ac-b318-e674638a8081&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "Mulder pursues a man whom he believes is actually a demon bent on fathering a child.",
        name: "Terms of Endearment",
        path: "https://img.hulu.com/user/v3/artwork/da700152-5fdc-4c77-a793-f503629a31c7?base_image_bucket_name=image_manager&base_image=0ceec18d-10e1-4100-8bd5-1f54fbef5c92&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          'Mulder and Scully investigate the man who "blesses the rains" in a small town that suffers from drought.',
        name: "The Rain King",
        path: "https://img3.hulu.com/user/v3/artwork/ac871e87-c0ad-4af0-9019-3d63d5a5c804?base_image_bucket_name=image_manager&base_image=3d162140-acd3-4a56-9841-3eeab331bc17&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "Mulder and Scully search for answers when Skinner is infected with a mysterious disease that will end his life in twenty-four hours.",
        name: "S.R.819",
        path: "https://img.hulu.com/user/v3/artwork/3885c6a9-6baf-446a-a055-b0712b3005b5?base_image_bucket_name=image_manager&base_image=de321db8-23b2-4190-8631-48316a9fd250&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "Scully pursues a photographer who can seemingly predict the deaths of other people.",
        name: "Tithonus",
        path: "https://img.hulu.com/user/v3/artwork/844c41c3-a27a-47b6-b521-9abd1a3155f2?base_image_bucket_name=image_manager&base_image=6fdb511a-d913-4384-bceb-ee6242b59284&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "The agents search for answers when Cassandra Spender mysteriously reappears.",
        name: "Two Fathers",
        path: "https://img.hulu.com/user/v3/artwork/6de25637-b06c-462c-800d-b1d058c356e9?base_image_bucket_name=image_manager&base_image=50d9dfe2-9e77-437a-99ed-b873c1987544&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "The agents attempt to prevent an alien invasion of Earth.",
        name: "One Son",
        path: "https://img4.hulu.com/user/v3/artwork/88c8eae1-97c6-489f-b126-9a883076a41f?base_image_bucket_name=image_manager&base_image=bd2bfade-56ec-4adb-8905-c12ac06f8bb3&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "As a hurricane bears down on the Florida coast, the agents search for a sea monster that Arthur Dales believes is responsible for the disappearance of a couple and their son.",
        name: "Agua Mala",
        path: "https://img4.hulu.com/user/v3/artwork/54afbf95-157a-4ec2-809f-365841347fcd?base_image_bucket_name=image_manager&base_image=821c2caf-a58c-40ee-be80-d40809f59501&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "A woman desperately attempts to alter the outcome of events of a day she is forced to relive again and again.",
        name: "Monday",
        path: "https://img2.hulu.com/user/v3/artwork/7d5fc2ce-b156-46b7-a781-aa96a69a3139?base_image_bucket_name=image_manager&base_image=1b0b9b82-fdc1-4e60-8664-fdcfd665cca1&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "Mulder and Scully go undercover at a planned community where a local investigation into a series of mysterious deaths has been hampered by a conspiracy of silence.",
        name: "Arcadia",
        path: "https://img1.hulu.com/user/v3/artwork/45604f2e-1c63-4d0f-bd6f-f71e364f2f8e?base_image_bucket_name=image_manager&base_image=3a8baaf8-5d79-4514-9ac8-ceaa207a7e64&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "The agents hunt for a legendary wild dog that is suspected of killing several people.",
        name: "Alpha",
        path: "https://img1.hulu.com/user/v3/artwork/33707a82-d4c2-4035-9760-35924c4a2ba4?base_image_bucket_name=image_manager&base_image=1d3495d0-65d7-4ac5-be0c-c6dc72cfebc0&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "The agents pursue an escaped convict capable of passing through solid matter.",
        name: "Trevor",
        path: "https://img.hulu.com/user/v3/artwork/a24bbb29-ba43-40cf-998e-0fc402c01ac1?base_image_bucket_name=image_manager&base_image=cb7fbc0c-9d07-4042-b3de-c68f4401f55c&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "A writer who lives next door to Mulder becomes the prime suspect in a series of killings.",
        name: "Milagro",
        path: "https://img3.hulu.com/user/v3/artwork/303555a2-1e17-45cb-9e34-90cc8b9e9d6c?base_image_bucket_name=image_manager&base_image=6b13424b-9870-428c-86ce-9e4c3c5407d4&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "Arthur Dales’ brother recounts a tale about a talented alien baseball player who hid amongst an all-African-American team in Roswell, New Mexico during the 1940s.",
        name: "The Unnatural",
        path: "https://img4.hulu.com/user/v3/artwork/7b18ec0d-88b9-4d6c-b7f6-11cbff8aa308?base_image_bucket_name=image_manager&base_image=a9b26aec-ffe7-4cd8-891b-2e1be2689b3c&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "The Lone Gunmen encounter Susanne Modeski as they attempt to infiltrate a defense contractors’ conference in Las Vegas.",
        name: "Three of a Kind",
        path: "https://img4.hulu.com/user/v3/artwork/803ed833-5270-42df-932d-9e9415538e85?base_image_bucket_name=image_manager&base_image=29d167c3-d71e-4ef4-b6f8-2b0b2467de7e&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "A mystery involving two skeletons leads the agents on a journey in which nothing is quite as it seems.",
        name: "Field Trip",
        path: "https://img2.hulu.com/user/v3/artwork/cb75cd32-bf08-4dd9-846f-12cdc62a023d?base_image_bucket_name=image_manager&base_image=f583c63b-dc20-44f8-8d4f-1d0fa37e0e34&size=600x338&format=jpeg",
      },
      {
        number: 22,
        description:
          "Mulder believes that metallic objects discovered in Africa are proof that life originated elsewhere in the universe.",
        name: "Biogenesis",
        path: "https://img1.hulu.com/user/v3/artwork/86172c4f-19da-4a3f-95b9-dba73dc75fcc?base_image_bucket_name=image_manager&base_image=f30f61df-2d24-4cef-97fa-082db253920e&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "7",
    items: [
      {
        number: 1,
        description:
          "Scully attempts to decipher the strange symbols covering a submerged spacecraft in hopes of finding a cure to Mulder’s affliction.",
        name: "The Sixth Extinction",
        path: "https://img4.hulu.com/user/v3/artwork/4969c41b-cad0-4810-b337-49b5e67652f2?base_image_bucket_name=image_manager&base_image=fd203bc8-8427-43c7-9c74-072b5aa6fe28&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "Scully searches for Mulder after the Cigarette Smoking Man takes him from a hospital for purposes unknown.",
        name: "The Sixth Extinction:  Amor Fati",
        path: "https://img4.hulu.com/user/v3/artwork/ca95ccc9-d53b-42d6-ab8e-0db0933e4aac?base_image_bucket_name=image_manager&base_image=97e36507-88e3-43ef-b029-b251add3d1aa&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "The agents attempt to link a grisly murder to a fast food restaurant employee with a most unusual eating disorder.",
        name: "Hungry",
        path: "https://img.hulu.com/user/v3/artwork/eb5ff1a5-b1a6-4278-9efc-c6ca76b3272c?base_image_bucket_name=image_manager&base_image=76d6a0a4-8d7e-4cfa-9314-130ed6e60813&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "As the year 2000 approaches, the agents seek out ex-Millennium Group member Frank Black when some of his former associates turn into the walking dead.",
        name: "Millennium",
        path: "https://img4.hulu.com/user/v3/artwork/1976dc71-73f6-4244-a484-11ee4d7f6f0c?base_image_bucket_name=image_manager&base_image=393fdb2d-6d1f-416f-8ad1-3c36052b9594&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "The agents encounter a group of teenagers who somehow move faster than the eye can see.",
        name: "Rush",
        path: "https://img2.hulu.com/user/v3/artwork/f6b18b9b-dd65-4dfe-8e27-8f6076e04609?base_image_bucket_name=image_manager&base_image=3834a9d3-fb90-4b92-8712-377f245b79aa&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "The agents encounter a man who may just be the luckiest person in the world.",
        name: "The Goldberg Variation",
        path: "https://img2.hulu.com/user/v3/artwork/80145b7c-3494-4660-9ba6-0c3d443272eb?base_image_bucket_name=image_manager&base_image=1353dc77-84bc-447c-bb4b-2b1bc5497986&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "A reverend helps a death fetishist -- who once terrorized Scully -- escape from prison.",
        name: "Orison",
        path: "https://img1.hulu.com/user/v3/artwork/c141a1d3-30e2-4d34-a45d-9799dcbf13ab?base_image_bucket_name=image_manager&base_image=388943ae-9961-4285-89b2-659d71f05dab&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "The agents attempt to solve a mystery involving a magician who literally lost his head.",
        name: "The Amazing Maleeni",
        path: "https://img4.hulu.com/user/v3/artwork/94c40531-68cd-470c-997a-fa9d02be4a4e?base_image_bucket_name=image_manager&base_image=15b3e0b7-2746-4e7f-b06f-0d8841f9b571&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "The agents investigate when a man connected to a church that uses deadly snakes to test the righteousness of its members dies after being repeatedly bitten by snakes.",
        name: "Signs and Wonders",
        path: "https://img1.hulu.com/user/v3/artwork/c4f55c86-b6f6-4b84-9d2b-48e96fce9612?base_image_bucket_name=image_manager&base_image=c18dea6f-ecd0-4a49-a1a5-9f6ab51f0427&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "Mulder experiences a tragic loss in his personal life as he investigates a young girl’s disappearance.",
        name: "Sein Und Zeit",
        path: "https://img4.hulu.com/user/v3/artwork/1daec17d-1df6-4c45-84aa-a1c5281d397c?base_image_bucket_name=image_manager&base_image=9ae5a6e0-eafa-45b8-ae01-e9f95f5022e8&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "With the help of a police psychic, Mulder searches for his missing sister.",
        name: "Closure",
        path: "https://img2.hulu.com/user/v3/artwork/f7f60082-d829-4853-84c0-152278b90982?base_image_bucket_name=image_manager&base_image=bd8f0c19-9448-4213-9b89-47618658f029&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "A camera crew from the television series COPS follows the agents as they attempt to catch a mysterious creature terrorizing Los Angeles.",
        name: "X-Cops",
        path: "https://img1.hulu.com/user/v3/artwork/0a48d0fd-4d0e-4f2b-bfb5-52a498876c7c?base_image_bucket_name=image_manager&base_image=05b0dee2-888b-4bdf-9830-03c584fe1a92&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "The agents find themselves trapped inside a computer game dominated by an extremely sexy -- and deadly -- virtual character.",
        name: "First Person Shooter",
        path: "https://img3.hulu.com/user/v3/artwork/a2df0fb4-5bae-461e-9f23-e7784ad99623?base_image_bucket_name=image_manager&base_image=244a0fb4-5176-4a7a-81dd-e92aecdf4c56&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "When a medical doctor’s family falls victim to rare diseases, Mulder suspects it may be the handiwork of someone familiar with hexes.",
        name: "Theef",
        path: "https://img.hulu.com/user/v3/artwork/5c4dd564-09e5-4674-ac1e-7a5ad5de4919?base_image_bucket_name=image_manager&base_image=e81cbf63-3b8a-48dd-a3a2-1f264b29e1be&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "Scully accompanies the Cigarette Smoking Man on a journey to meet a scientist who possesses the cure to cancer.",
        name: "En Ami",
        path: "https://img3.hulu.com/user/v3/artwork/bbdcd0e2-1461-4e82-b469-91d7345b6cfa?base_image_bucket_name=image_manager&base_image=0b8af13a-6ec5-49f7-903c-d837cc345d61&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "During the Easter holiday, Mulder investigates a mysterious series of deaths involving the appearance of ravens, broken mirrors…and a murderous creature.",
        name: "Chimera",
        path: "https://img1.hulu.com/user/v3/artwork/89bff61c-e27c-4c62-a62f-931fe3bc265d?base_image_bucket_name=image_manager&base_image=7b274137-5134-4c80-97ab-e80208f760a9&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "Scully embraces an alternative approach to healing as she attempts to save the life of a former lover.",
        name: "All Things",
        path: "https://img.hulu.com/user/v3/artwork/e3be1129-6942-4d52-8f9f-f4064f801338?base_image_bucket_name=image_manager&base_image=0eb53a38-b840-4252-b25c-8908c8a66aa7&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "Mulder falls victim to a deadly insect linked to a tobacco company’s research lab.",
        name: "Brand X",
        path: "https://img3.hulu.com/user/v3/artwork/41a54680-b716-4400-ac19-0fb96287adc9?base_image_bucket_name=image_manager&base_image=1d685c9b-0447-4734-9a87-10d394bdffa0&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "A screenwriter tags along with the agents as they investigate a church bombing -- a case that is later transformed into a Hollywood film.",
        name: "Hollywood A.D.",
        path: "https://img1.hulu.com/user/v3/artwork/9b2f0a91-1e27-46f5-b537-c0d4f480a329?base_image_bucket_name=image_manager&base_image=c0067e95-6fc1-4323-9348-1804d8f5b82a&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "The agents search for two nearly identical women who trigger destruction whenever they meet.",
        name: "Fight Club",
        path: "https://img1.hulu.com/user/v3/artwork/77c750cc-481c-4ff6-825f-f25861d7c3dc?base_image_bucket_name=image_manager&base_image=96c96bee-73e9-4e0f-bc10-b873660aeb9a&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "A man without a mouth and an invisible corpse lead the agents to a genie who grants Mulder three wishes.",
        name: "Je Souhaite",
        path: "https://img2.hulu.com/user/v3/artwork/33c7e044-00bd-41d1-9756-3783c565acd0?base_image_bucket_name=image_manager&base_image=98c377f5-f777-4963-895f-a6a6afb97a74&size=600x338&format=jpeg",
      },
      {
        number: 22,
        description:
          "Revisiting the case that brought them together seven years earlier jeopardizes Mulder and Scully's partnership.",
        name: "Requiem",
        path: "https://img4.hulu.com/user/v3/artwork/702ee282-fa51-4bb7-8d8d-728c864b2e68?base_image_bucket_name=image_manager&base_image=4458b6f0-20a3-4923-ae74-fc8bee9c2339&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "8",
    items: [
      {
        number: 1,
        description:
          "Agent John Doggett heads an FBI manhunt to locate the missing Mulder. Meanwhile, Scully and Skinner use information supplied by the Lone Gunmen in their quest to find their colleague.",
        name: "Within",
        path: "https://img4.hulu.com/user/v3/artwork/0f359da8-ac8d-404b-b476-5be7b0a31607?base_image_bucket_name=image_manager&base_image=506720f7-7fe6-408b-8e16-2b8652496906&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "While searching for the missing Gibson Praise, Scully, Skinner and Doggett encounter the alien bounty hunter, who uses his shapeshifting abilities to fool the FBI as he attempts to destroy the boy.",
        name: "Without",
        path: "https://img1.hulu.com/user/v3/artwork/ef334dc8-8684-43fc-be34-3fdc14fe55a8?base_image_bucket_name=image_manager&base_image=f522a813-65aa-479f-9208-0c2dc21ee72c&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "Scully and Doggett investigate several killings involving a terrifying bat-like creature.",
        name: "Patience",
        path: "https://img.hulu.com/user/v3/artwork/4874ae71-3ba2-4ba2-8c2b-ec0bb53dd5c6?base_image_bucket_name=image_manager&base_image=f9e204eb-9390-4793-ad17-1369828ad63f&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "Scully finds herself trapped in a desolate area where townspeople seemingly worship a hitchhiker.",
        name: "Roadrunners",
        path: "https://img1.hulu.com/user/v3/artwork/71fa66d2-ad08-4089-b4bd-32676bc20c59?base_image_bucket_name=image_manager&base_image=e959d901-8d63-4873-bee6-1430dd807548&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "A little boy who vanished ten years earlier suddenly reappears…but has not aged a day.",
        name: "Invocation",
        path: "https://img4.hulu.com/user/v3/artwork/9993e05f-947d-4e6a-91bc-7ff0d9ad20b8?base_image_bucket_name=image_manager&base_image=f0bc0256-de65-47df-8841-96b75fb741e2&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "A man accused of murdering his wife realizes he’s been given a second chance at correcting past mistakes.",
        name: "Redrum",
        path: "https://img4.hulu.com/user/v3/artwork/dcc29838-c855-43fa-9fde-13471d5b6446?base_image_bucket_name=image_manager&base_image=fe8f58a7-bbd8-4c82-a0bd-aba246bdf21c&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "Doggett investigates a cult leader’s seeming ability to project himself into his victim’s dreams; Scully checks into a hospital.",
        name: "Via Negativa",
        path: "https://img1.hulu.com/user/v3/artwork/973b1531-5a70-4046-8bf6-e925c469c0cb?base_image_bucket_name=image_manager&base_image=4864e2f7-fb63-42af-a04b-032705c5cd85&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "The agents search for a killer who seemingly possesses the ability to see through walls.",
        name: "Surekill",
        path: "https://img1.hulu.com/user/v3/artwork/f4fad7d4-0885-47a8-8b48-100169b3d9db?base_image_bucket_name=image_manager&base_image=fc8e1b29-e2f8-4a52-9984-967044473f63&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "Scully and Doggett track a metallic man bent on killing those responsible for his condition.",
        name: "Salvage",
        path: "https://img2.hulu.com/user/v3/artwork/710d50f1-e1d8-443a-9c79-d39d5a95082a?base_image_bucket_name=image_manager&base_image=0cabb628-c5dd-4229-928a-bdffc82a0c43&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "The agents pursue an Indian mystic who can manipulate the human mind.",
        name: "Badlaa",
        path: "https://img4.hulu.com/user/v3/artwork/894e339f-7321-4d7c-bc67-9204e85fc004?base_image_bucket_name=image_manager&base_image=5598c8cd-ce97-4e80-b978-a905fa87974a&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "Doggett seeks to solve a mystery involving Mulder and a legendary creature linked to Native American lore.",
        name: "The Gift",
        path: "https://img4.hulu.com/user/v3/artwork/894e339f-7321-4d7c-bc67-9204e85fc004?base_image_bucket_name=image_manager&base_image=5598c8cd-ce97-4e80-b978-a905fa87974a&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "With the clock ticking, Doggett and a team of experts attempts to solve the mystery behind strange deaths in a Boston subway tunnel.",
        name: "Medusa",
        path: "https://img2.hulu.com/user/v3/artwork/abf4831b-ad9c-46ca-b6bc-06a5c3d6d99b?base_image_bucket_name=image_manager&base_image=925edab2-0881-499f-b9a2-937d87dbdf93&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "Scully fears that she and another pregnant woman will give birth to alien babies.",
        name: "Per Manum",
        path: "https://img3.hulu.com/user/v3/artwork/955518c3-76e3-4a8f-aedf-9e3b6c744d4d?base_image_bucket_name=image_manager&base_image=b738cecf-fefc-48f9-9bdb-d046e1194dfb&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "Joined by FBI Agent Monica Reyes, Scully, Doggett and Skinner search for Jeremiah Smith after a UFO deposits the bodies of ailing abductees on Earth.",
        name: "This Is Not Happening",
        path: "https://img1.hulu.com/user/v3/artwork/27c917bc-6265-4592-9c65-18b969e62195?base_image_bucket_name=image_manager&base_image=58dfb1ba-e8cf-4aee-bc35-19eb94de81f7&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "After Mulder is put to rest, the body of an alien abductee comes back to life, giving Scully and Skinner cause for hope.",
        name: "Deadalive",
        path: "https://img3.hulu.com/user/v3/artwork/02ea4303-17fc-432e-b77f-69dac61c8907?base_image_bucket_name=image_manager&base_image=e788cc8a-0c03-4fb5-9110-cc940f44effa&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "A U.S. census worker's attempt to warn the White House about an alien invasion sparks Mulder's quest to access data stored at an information processing complex.",
        name: "Three Words",
        path: "https://img2.hulu.com/user/v3/artwork/22003eda-78aa-438a-bd5e-ee330f990d5c?base_image_bucket_name=image_manager&base_image=f03bf749-6c32-47a6-873c-e86976f9763a&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "The agents search for a man who may have been connected with the death of Doggett's son years earlier…a man who may be possessed by evil itself.",
        name: "Empedocles",
        path: "https://img4.hulu.com/user/v3/artwork/25a55adb-48b1-4837-8736-c166968bb374?base_image_bucket_name=image_manager&base_image=afebc6df-21d4-44d5-ac72-a61da58dea86&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "Mulder and Doggett become trapped on an oil rig manned by crewmen infected with the mysterious black oil virus.",
        name: "Vienen",
        path: "https://img2.hulu.com/user/v3/artwork/43086905-444b-437e-9003-0a815c7f8264?base_image_bucket_name=image_manager&base_image=24f94269-3f7a-4ded-9c74-a6ab29ec736b&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "Mulder searches for Doggett and his new partner after they are trapped with a deadly reptilian monster.",
        name: "Alone",
        path: "https://img1.hulu.com/user/v3/artwork/8b9d263d-5bd5-4330-bfe1-86143ef72097?base_image_bucket_name=image_manager&base_image=3d1046b6-7898-472a-b51b-9ffb0b28735d&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "A seemingly-unstoppable Billy Miles begins killing scientists performing genetic research -- then targets Scully.",
        name: "Essence",
        path: "https://img.hulu.com/user/v3/artwork/92b05bd3-7727-4f3d-90f5-38e7003d292b?base_image_bucket_name=image_manager&base_image=98d1d4bd-291e-42a5-b614-f97e0f3ddf90&size=600x338&format=jpeg",
      },
      {
        number: 21,
        description:
          "Mulder searches for answers when a connection is made between Billy Miles and members of the FBI; Scully and Reyes find refuge in a remote location as Scully prepares to give birth.",
        name: "Existence",
        path: "https://img2.hulu.com/user/v3/artwork/524aa5de-1fc8-4c63-a4ad-5ed8c1776545?base_image_bucket_name=image_manager&base_image=a4bc7d87-635c-4d9b-9c77-a55d487d56be&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "9",
    items: [
      {
        number: 1,
        description:
          "A surveillance tape threatens to derail Doggett’s investigation of Deputy Director Kersh; a beautiful woman with the ability to remain submerged underwater infiltrates the FBI; Mulder disappears.",
        name: "Nothing Important Happened Today",
        path: "https://img1.hulu.com/user/v3/artwork/dc414ef0-8278-4987-bfda-3bcbd86ee06d?base_image_bucket_name=image_manager&base_image=e11e065c-a07b-4b9f-a7a5-bd51d14e7fb9&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "As Doggett continues his investigation of Deputy Director Kersh, he attempts to uncover the truth about a woman with superhuman abilities, who is somehow connected to scientific experiments being conducted on WW2-era marine vessel.",
        name: "Nothing Important Happened Today, Part 2",
        path: "https://img3.hulu.com/user/v3/artwork/06481075-e322-4eae-806d-aebf6633fc0e?base_image_bucket_name=image_manager&base_image=1144ec57-1715-4421-9910-71da1321a39b&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "The agents attempt to find a link between a mental patient and several bizarre Satanic murders.",
        name: "Daemonicus",
        path: "https://img.hulu.com/user/v3/artwork/09a05564-e8f3-482e-a4ba-e7959a272e45?base_image_bucket_name=image_manager&base_image=f07d1484-4409-4f09-bd29-80002798b2ed&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "Agent Reyes theorizes that a maniacal killer who critically wounded Doggett may have entered our world from a parallel dimension.",
        name: "4-D",
        path: "https://img2.hulu.com/user/v3/artwork/12e5db5e-b644-44f4-89ad-be34d3a78078?base_image_bucket_name=image_manager&base_image=5030da25-5838-4829-90c0-8ccd0869e9fd&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "The agents investigate the murder of a teenager who died after insects devoured his brain.",
        name: "Lord of the Flies",
        path: "https://img2.hulu.com/user/v3/artwork/d1d90d65-1f90-4cb5-825f-264e12fbbdfa?base_image_bucket_name=image_manager&base_image=de3d9c53-f6f9-4ce6-b765-fb57c5ac1625&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "Scully befriends a couple who believe their infant possesses the same unworldly qualities as baby William; a shadowy operative convinces Scully to contact Mulder and draw him out of seclusion.",
        name: "Trust No 1",
        path: "https://img4.hulu.com/user/v3/artwork/3977f070-4f07-47a0-a903-ee15a47039b8?base_image_bucket_name=image_manager&base_image=948c2ebb-eef4-49be-bdb5-8b49909efe25&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "Agent Doggett awakens in a corrupt and violent Mexican town with no memory of his true identity.",
        name: "John Doe",
        path: "https://img2.hulu.com/user/v3/artwork/b75f5da7-58e2-4dfb-ab61-4ce622ae32fa?base_image_bucket_name=image_manager&base_image=440fa0aa-e64d-42ec-8d67-80810db6df80&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "Reyes senses she somehow played a role in a series of grisly murders dating back more than a century -- in which the victims were all skinned alive.",
        name: "Hellbound",
        path: "https://img2.hulu.com/user/v3/artwork/d52d2d85-c2cd-49f0-be3b-b7fabfd8b199?base_image_bucket_name=image_manager&base_image=78603ee4-d3e9-4e27-acca-93b573b423b7&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "When a religious cult operating in Canada unearths a spacecraft similar to the one Scully discovered in Africa, a plot is set in motion to kill baby William.",
        name: "Provenance",
        path: "https://img.hulu.com/user/v3/artwork/03c97b39-d8b1-45d4-b040-8c8681fd17b3?base_image_bucket_name=image_manager&base_image=7f889659-5313-42ca-8c60-444bbdbefabf&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "As Scully desperately searches for her son, religious cult members make preparations to access a spaceship which they believe houses a physical manifestation of God.",
        name: "Providence",
        path: "https://img.hulu.com/user/v3/artwork/05b26963-315c-4806-8197-bb5604489b16?base_image_bucket_name=image_manager&base_image=eee8728a-0dab-456f-a83a-ae06e90c4690&size=600x338&format=jpeg",
      },
      {
        number: 11,
        description:
          "When Agent Reyes is injured in a car accident, she finds herself trapped in a netherworld between life and death -- and her only hope for survival lies with a hospital staffer who can bridge both worlds.",
        name: "Audrey Pauley",
        path: "https://img.hulu.com/user/v3/artwork/6058c6cd-c714-4537-806f-79ae9d4fceaa?base_image_bucket_name=image_manager&base_image=2142ec1e-14dc-4a82-ba19-fe003814444c&size=600x338&format=jpeg",
      },
      {
        number: 12,
        description:
          "When DNA evidence exonerates a murderer whom Doggett helped incarcerate thirteen years earlier, an obsessed Doggett desperately tries to put the man back in jail before he strikes again.",
        name: "Underneath",
        path: "https://img2.hulu.com/user/v3/artwork/2812515a-bcc6-4103-ba04-4373b2f68557?base_image_bucket_name=image_manager&base_image=a3e9d252-3606-458e-97bf-ff4b6423af7c&size=600x338&format=jpeg",
      },
      {
        number: 13,
        description:
          "When Reyes uses numerology to connect the murders of several women, she and Scully become trapped with a mysterious checker-playing man who may or may not be the killer.",
        name: "Improbable",
        path: "https://img.hulu.com/user/v3/artwork/a31375ea-9aaa-45f5-82e0-db44020a382f?base_image_bucket_name=image_manager&base_image=b2ce092c-23a5-4209-9f18-f3eb16e793dd&size=600x338&format=jpeg",
      },
      {
        number: 14,
        description:
          "A little boy appears to be at the center of mysterious and deadly happenings involving strange creatures which seemingly take refuge inside the human body.",
        name: "Scary Monsters",
        path: "https://img4.hulu.com/user/v3/artwork/23277861-4dc0-4530-8fe7-435a6bb812ff?base_image_bucket_name=image_manager&base_image=46db425c-d4a3-4afd-9634-21fa406191b0&size=600x338&format=jpeg",
      },
      {
        number: 15,
        description:
          "When scam artist Morris Fletcher claims to know the identity of a super soldier, Reyes and Doggett turn to the Lone Gunmen for help…leading them on a quest to find their old friend, Yves Adele Harlow, who is suspected of murdering a college professor.",
        name: "Jump The Shark",
        path: "https://img4.hulu.com/user/v3/artwork/53be96cc-0ec4-4e7a-b649-814e725df549?base_image_bucket_name=image_manager&base_image=76c1b379-46c5-4758-b1cf-3eb34ad5db34&size=600x338&format=jpeg",
      },
      {
        number: 16,
        description:
          "The agents detain a horrifically scarred man caught breaking into the X-Files office and attempt to determine his true identity…a man Doggett believes is Fox Mulder.",
        name: "William",
        path: "https://img4.hulu.com/user/v3/artwork/498c95a9-d8b3-4234-b810-a5fe1c167b24?base_image_bucket_name=image_manager&base_image=9aea221c-9bf9-427f-b6d5-3362ef74b02f&size=600x338&format=jpeg",
      },
      {
        number: 17,
        description:
          "An FBI cadet with an uncanny instincts for solving crimes sheds new light on the unsolved murder of Doggett’s son.",
        name: "Release",
        path: "https://img3.hulu.com/user/v3/artwork/fddc35bc-5d36-4bdc-b4de-02d738e3f885?base_image_bucket_name=image_manager&base_image=265d45e0-7b8a-40cc-8eb3-1a3688e7ebff&size=600x338&format=jpeg",
      },
      {
        number: 18,
        description:
          "The agents attempt to “connect the dots” when a series of strange deaths are linked to a man who resides in a house that is an exact replica of the house from The Brady Bunch television series -- complete with The Bradys themselves.",
        name: "Sunshine Days",
        path: "https://img4.hulu.com/user/v3/artwork/f6713c68-8566-42fa-8273-f1fe32c59e40?base_image_bucket_name=image_manager&base_image=b4afd3c2-511f-4f8f-84c8-c48a4ff06593&size=600x338&format=jpeg",
      },
      {
        number: 19,
        description:
          "When Mulder is accused of murdering Knowle Rohrer, the US military puts him on trial -- and hears testimony from a group of defense witnesses who support Mulder's claim regarding a government conspiracy and the existence of extraterrestrial life.",
        name: "The Truth, Part 1",
        path: "https://img4.hulu.com/user/v3/artwork/d79c4bb2-00bd-43cd-aeb4-b3c2f072896e?base_image_bucket_name=image_manager&base_image=5ba48bb4-315d-4f56-ba70-48554f72e6d6&size=600x338&format=jpeg",
      },
      {
        number: 20,
        description:
          "When Mulder is accused of murdering Knowle Rohrer, the US military puts him on trial -- and hears testimony from a group of defense witnesses who support Mulder's claim regarding a government conspiracy and the existence of extraterrestrial life. 2 of 2.",
        name: "The Truth, Part 2",
        path: "https://img2.hulu.com/user/v3/artwork/20ab2719-a022-4450-b03f-c5d07de08c9a?base_image_bucket_name=image_manager&base_image=bed62309-356c-4945-b1ff-3591ce738556&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "10",
    items: [
      {
        number: 1,
        description:
          "Thirteen years after the original series run, the next mind-bending chapter of the thrilling series The X-Files is here.",
        name: "My Struggle",
        path: "https://img.hulu.com/user/v3/artwork/f16f8b7d-aafa-45c0-b359-75cd5e20b5fd?base_image_bucket_name=image_manager&base_image=8c52c5e2-cf6c-402f-891e-ee1c8f3f54e5&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "When a scientist suddenly commits suicide, Mulder and Scully investigate what unseen force may have driven him to it.",
        name: "Founder's Mutation",
        path: "https://img4.hulu.com/user/v3/artwork/0daba6f0-f32a-4dd3-a24d-614bd65fed88?base_image_bucket_name=image_manager&base_image=6353a962-20cd-4f0a-b7b0-7222c2f4cf0e&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "When a dead body is found in the woods, Mulder and Scully are called in to investigate whether it was an animal attack, a serial killer or just maybe a strange creature as described by eyewitnesses.",
        name: "Mulder and Scully Meet the Were-Monster",
        path: "https://img.hulu.com/user/v3/artwork/86a3fe0b-74da-487a-818c-f2f777c5c93e?base_image_bucket_name=image_manager&base_image=a8f831de-4f49-474d-9572-1d5e0ac3461b&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "Mulder and Scully are sent to investigate the murder of a city official, which, it seems, no human could have committed.",
        name: "Home Again",
        path: "https://img2.hulu.com/user/v3/artwork/538d3532-c2fa-4c52-935d-352b55eebf12?base_image_bucket_name=image_manager&base_image=6aba0b3b-7d79-48e7-bb6a-23b58a51e35b&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "When an art gallery that's showing potentially offensive artwork is bombed, Mulder and Scully seek some way to communicate with the comatose bomber in order to prevent a future attack.",
        name: "Babylon",
        path: "https://img.hulu.com/user/v3/artwork/ef743e4b-90ca-4c10-b3cd-98e3ccbe4ebb?base_image_bucket_name=image_manager&base_image=b3c391bd-5cf0-4b2d-9d6c-b33d2eb0df13&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "SEASON-FINALE. The investigations that Mulder and Scully previously began with web-TV show host Tad O'Malley (guest star Joel McHale) have awakened powerful enemies.",
        name: "My Struggle II",
        path: "https://img4.hulu.com/user/v3/artwork/2614d8a4-850e-4a0b-a7ce-c1d014687dd7?base_image_bucket_name=image_manager&base_image=7d3ad20f-7172-42e5-8e62-c7df5319ae13&size=600x338&format=jpeg",
      },
    ],
  },
  {
    id: "11",
    items: [
      {
        number: 1,
        description:
          "Mulder and Scully come to discover that they are not the only people who are engaged in a desperate search for their son, William.",
        name: "My Struggle III",
        path: "https://img.hulu.com/user/v3/artwork/b211780c-abfe-43c4-b1c8-30dda3d46001?base_image_bucket_name=image_manager&base_image=8dab5c26-3949-4627-8717-3b7f33d67a8c&size=600x338&format=jpeg",
      },
      {
        number: 2,
        description:
          "An old friend reaches out to Mulder and Scully in a seemingly impossible way, revealing a chilling secret.",
        name: "This",
        path: "https://img.hulu.com/user/v3/artwork/5295aa75-9923-48f5-ab8f-ddadb4c1be2c?base_image_bucket_name=image_manager&base_image=cd322071-a5cb-4da3-855f-6a7780ec11c1&size=600x338&format=jpeg",
      },
      {
        number: 3,
        description:
          "Mulder and Scully engross themselves into an investigation about a series of deaths caused by the victims becoming haunted by their very own doppelgangers.",
        name: "Plus One",
        path: "https://img1.hulu.com/user/v3/artwork/626067fa-cd1b-4cf4-873c-0ec5119d9ba3?base_image_bucket_name=image_manager&base_image=689777dd-344c-40b5-8c15-6ab7e524a642&size=600x338&format=jpeg",
      },
      {
        number: 4,
        description:
          "Mulder and Scully learn how The X-Files themselves may have originated.",
        name: "The Lost Art of Forehead Sweat",
        path: "https://img3.hulu.com/user/v3/artwork/e2d9e156-1efe-4990-9d46-77ea13039c29?base_image_bucket_name=image_manager&base_image=d257544a-f560-40e6-a89b-cf28ea56787a&size=600x338&format=jpeg",
      },
      {
        number: 5,
        description:
          "An investigation may lead Mulder and Scully to their long-lost son, William.",
        name: "Ghouli",
        path: "https://img2.hulu.com/user/v3/artwork/c23b42dc-f206-41ab-8da6-224dca1456c5?base_image_bucket_name=image_manager&base_image=e13ddf15-a983-4ed0-9eeb-5ecf830db456&size=600x338&format=jpeg",
      },
      {
        number: 6,
        description:
          "Skinner goes AWOL when his past comes back to haunt him. THE X-FILES airs Wednesdays on FOX.",
        name: "Kitten",
        path: "https://img.hulu.com/user/v3/artwork/9d358c06-b96e-4826-a6ba-6011df8a30fb?base_image_bucket_name=image_manager&base_image=7513cd25-7c09-4274-a8a9-077677c69ab0&size=600x338&format=jpeg",
      },
      {
        number: 7,
        description:
          "Mulder and Scully find themselves targets in a deadly game of cat-and-mouse.",
        name: "Game",
        path: "https://img1.hulu.com/user/v3/artwork/8947630c-9aea-42ee-a489-9dadcbc151db?base_image_bucket_name=image_manager&base_image=451fc779-5293-4830-89a4-9eba0be76cc4&size=600x338&format=jpeg",
      },
      {
        number: 8,
        description:
          "Mulder and Scully investigate the brutal animal attack of a little boy.",
        name: "Familiar",
        path: "https://img2.hulu.com/user/v3/artwork/4113f1c1-e8b5-4adb-83b0-7220ca7b9c57?base_image_bucket_name=image_manager&base_image=055793de-8b54-4ac7-b9c1-b647f1743b8c&size=600x338&format=jpeg",
      },
      {
        number: 9,
        description:
          "While investigating human organ theft, Mulder and Scully uncover a mysterious cult consumed with macabre rituals.",
        name: "Nothing Lasts Forever",
        path: "https://img3.hulu.com/user/v3/artwork/ef8190de-5d09-4351-beea-8342f8ad8f55?base_image_bucket_name=image_manager&base_image=0c7e9fba-4e39-4faa-9775-130f011ef6eb&size=600x338&format=jpeg",
      },
      {
        number: 10,
        description:
          "Mulder and Scully race to save an on-the-run William, in the season-finale.",
        name: "My Struggle IV",
        path: "https://img.hulu.com/user/v3/artwork/087b9649-67e0-4b28-b0cc-fdd178ac360c?base_image_bucket_name=image_manager&base_image=7789549c-8405-40fd-aead-3377c82d0af6&size=600x338&format=jpeg",
      },
    ],
  },
];
