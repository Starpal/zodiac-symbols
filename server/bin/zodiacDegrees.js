const mongoose = require('mongoose');
const ZodiacSymbol = require('../models/zodiacSymbol');

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

//ZodiacSymbol.collection.drop();

const degrees = [ {
	sign: "Aries",
	degree: "01",
	title: "A WOMAN JUST RISEN FROM THE SEA. A SEAL IS EMBRACING HER.",
	keynote: "KEYNOTE: Emergence of new forms and of the potentiality of consciousness.",
	description: `This is the first of the 360 phases of a universal and multilevel cyclic process which aims at the actualization of a particular set of potentialities. These potentialities, in the Sabian symbols, refer to the development of man's individualized consciousness — the consciousness of being an individual person with a place and function (a "destiny") in the planetary organism of the Earth, and in a particular type of human society and culture.

	To be individually conscious means to emerge out of the sea of generic and collective consciousness — which to the emerged mind appears to be unconsciousness. Such an emergence is the primary event. It is the result of some basic action: a leaving behind, an emerging from a womb or matrix, here symbolized by the sea.
	
	Such an action is not to be considered a powerful, positive statement of individual being. In the beginning is the Act; but it is often an imperceptible, insecure act. The small tender germ out of the seed does not loudly proclaim its existence. It has to pierce through the crust of the soil still covered with the remains of the past. It is all potentiality and a minimum of actual presence.
	
	In the symbol, therefore, the emergent entity is a Woman; symbolically speaking, a form of existence still close to the unconscious depths of generic biological nature, filled with the desire to be rather than self-assertion. The woman is seen embraced by a seal because the seal is a mammal which once had experienced a biological, evolutionary but relatively unconscious emergence, yet which retraced its steps and "returned to the womb" of the sea. The seal, therefore, represents a regressive step. It embraces the Woman who has emerged, because every emergent process at first is susceptible to failure. This process is indeed surrounded by the memory, the ghosts of past failures during previous cycles. The impulse upward is held back by regressive fear or insecurity; the issue of the conflict depends on the relative strength of the future-ward and the past-ward forces.
	
	The possibility of success and that of failure is implied throughout the entire process of actualization. Every release of potentiality contains this two-fold possibility. It inevitably opens up two paths: one leads to "perfection" in consciousness, the other to "disintegration" - the return to the undifferentiated state (the state of humus, manure, cosmic dust - i.e. to the symbolic "great Waters of space," to chaos) 
	
	This symbol characterizes the first of five stages which are repeated at three levels. This stage represents the initial statement, or theme, of the five-fold series which refers to the first level: IMPULSE TO BE.`
  },
  {
	sign: "Aries",
	degree: "02",
	title: "A COMEDIAN REVEALS HUMAN NATURE.",
	keynote: 'KEYNOTE: The capacity to look objectively at oneself and at others.',
	description: `While the first phase of the process of emergence is essentially in terms of subjective impulse and the desire to act, the second phase represents the attempt to evolve an objective awareness of existence. Through a sense of contrast, consciousness is gradually being built. It is what Teilhard de Chardin calls "reflective consciousness": the ability to see oneself reflected as in a mirror, and eventually to laugh at the inadequacy of the form one sees; thus "humor," the triumph of objective consciousness over subjective feeling or moods, or involvement in self. 

	This symbol characterizes the second stage in the first five-fold sequence of phases: the stage of OBJECTIVATION OF CONSCIOUSNESS. This second phase complements and polarizes the first, which stresses the subjective desire to become individually conscious.`
},
{
	sign: "Aries",
	degree: "03",
	title: "THE CAMEO PROFILE OF A MAN, SUGGESTING THE SHAPE OF HIS COUNTRY.",
	keynote: 'KEYNOTE: The sustaining power of the Whole, as the individual identifies themselves with It’s life.',
	description: `Having become objectively aware of their nature and basic humanity, the individualizing person finds power and inner security in realizing their essential identity with the section of the universe in which they operate. They and it seem to the consciousness united in a cosmic-planetary process - in a "participation mystique." Metaphysically expressed, this is the concept of the identity of Atman and Brahman. In another sense, through the ability to identify themselves with the complex of life activities surrounding them, the individual person can become truly, not only an image and representation of the Whole of their natal environment (local, planetary and perhaps eventually cosmic), but an agent through whom the Whole may express itself in an act of creative resonance and outpouring. This is the avatar ideal — the ideal of a "transpersonal" life and consciousness totally consecrated to and directed by a divine Power. This Power can also be conceived as the archetypal Self, the Christ-principle as it operates in and through an individual person and destiny who have become its outward manifestation in order to meet a collective human need.

	The concept of the formal-structural identity of the universal macrocosm and the human microcosm is a very important one, as it manifests itself at many levels. It provided an inner sense of security and harmonic strength to archaic man. To the modern individual assailed by surface evidence of meaninglessness and futility it gives a feeling of participation in the vast tide of evolution. It is the answer to the tragic sense of alienation so prevalent today.
	
	This symbol characterizes the third stage of the first five-fold sequence of phases: the stage of PARTICIPATION IN A GREATER LIFE.`
},
{
	sign: "Aries",
	degree: "04",
	title: "TWO LOVERS STROLLING ON A SECLUDED WALK.",
	keynote: `KEYNOTE: The progressive polarization of energies needed for fulfilling one's life function.`,
	description: `In order to respond fully to the potentialities released by a sense of identification with a greater Whole, the human being should be himself whole. An interplay of bipolar energies is needed to provide a sustained and dynamic "resonance" to any superior and encompassing form of life. This may imply a temporary withdrawal from routine activity, i.e. a "secluded" process. It is not, however, a closed process. The positive and negative polarities do not meet in a closed circuit, reconstituting a neutral state of potentiality. They operate in dynamic, open, unresolved togetherness in contact with the surrounding energies of nature.

	This symbol characterizes the fourth stage of the first five-fold sequence of phases: the stage of dynamic and unresolved POLARIZATION. It introduces the basic means - one might say, the technique - to establish consciousness in the world of duality.`
},
{
	sign: "Aries",
	degree: "05",
	title: "A TRIANGLE WITH WINGS.",
	keynote: `KEYNOTE: The capacity for self-transcending.`,
	description: `This is the symbol of the desire to reach a higher level of existence, of pure aspiration or devotion, of bhakti. What has emerged in the first phase of the process of differentiation is becoming aware of the possibility of further up-reachings. The principle of "levitation" is seen as one of the two essential factors in evolution. The emergent being glorifies and deifies it, but it is still only an ideal. At this stage, nevertheless, the whole being experiences a childlike longing for its eventual realization.

	At this point the last and synthesizing stage of the first five-fold unit in the cyclic process is reached. A NEW DIMENSION of being is envisioned mobilizing creative endeavors.`
},
{ 
	sign: "Aries",
	degree: "06",
	title: "A SQUARE, WITH ONE OF ITS SIDES BRIGHTLY ILLUMINED.",
	keynote: `KEYNOTE: The emotional desire for concrete and stabilized existence as a person.`,
	description: `This desire for individualization operates at first as a one-pointed or one-sided drive focusing itself upon an exclusive goal. All emotions are at first possessive, and all cultural manifestations operate on the principle of exclusion. All that does not belong to the tribal sphere (one blood, one land, one folk) is the potential enemy. This is a necessary phase, for - as in the case of "the woman emerging from the sea" - the first attempt at building an inner realization of integral being may be defeated at any time by the regressive pull toward undifferentiation and the prenatal state of non-individualization within the vast womb of nature or within unformed cosmic space.

	This first stage of the second five-fold sequence of symbols presents the theme which will be dialectically developed - a five-phase dialectical process: A ONE-SIDED URGE FOR INNER STABILITY.`
},
{
	sign: "Aries",
	degree: "07",
	title: "A MAN SUCCEEDS IN EXPRESSING HIMSELF SIMULTANEOUSLY IN TWO REALMS.",
	keynote: `KEYNOTE: The first realization of the dual nature of man and of the possibilities it implies.`,
	description: `This symbol represents the antithesis of the thesis pictured ill Phase 6, yet in such a five-fold sequence what we see is contrast rather than opposition. The primordial one-sidedness of emotional and cultural manifestation actually calls for the compensatory ability to operate at two levels. Thus the primary dualism of Sky and Earth, of the divine and the human, of spirit and matter. The vision and the emotions are focused within sharply defined boundaries, but within these boundaries they express themselves at two levels. This is the foundation of religion as well as of magic.

	A situation which has become characterized by this symbol can be successfully faced if its spiritual and material implications are understood and actualized.
	
	At this second stage of the second five-fold sequence of symbols we see at work man's capacity for LIVING TWO SEPARATE LIVES - and finding fulfillment and happiness in both. On this capacity are founded many of the complexities of human nature.`
},
{ 
	sign: "Aries",
	degree: "08",
	title: "A LARGE WOMAN'S HAT WITH STREAMERS BLOWN BY AN EAST WIND.",
	keynote: `KEYNOTE: Protection and spiritual guidance in the development of consciousness.`,
	description: `This somewhat strange image can be understood if every stated feature in it is clearly analyzed without preconceptions. Here again we see a woman; but now her head is covered with a large hat - a protection against the forces of nature, i.e. cold and/or the penetrating rays of the sun. At this emotional-cultural level (Phases 6 through 10) the mental processes are still largely undeveloped) thus they need protection from the elemental forces of life. A too great openness to the Sky-energies and the "spiritual" level could lead to obsessions of one kind or another.

	The symbolic image implies a rather strong wind, thus the activity of some more-than-material, and especially psychic, forces. These originated in the East, traditionally the seat of spiritualizing and creative-transforming influences. The woman's hat has streamers, which enable it not only to respond to the wind but to indicate its source. In other words, the image symbolizes a stage of development of consciousness in which the nascent powers of the mind are both protected and influenced by energies of a spiritual origin. This suggests a probationary stage in the process of individualization. Under protective guidance a still most receptive person (a woman) is being influenced by spiritual forces.
	
	This is a third stage symbol in which we see the first and second stages of this second five-fold sequence producing results which require PROTECTIVE FORMS (which is what a culture and ethical precepts provide) and SENSITIVITY to spiritual energies.`
},
{
	sign: "Aries",
	degree: "09",
	title: "A CRYSTAL GAZER.",
	keynote: `KEYNOTE: The development of an inner realization of organic wholeness.`,
	description: `The crystal sphere symbolizes wholeness. Within the sphere images take form. These images may reveal future events, but more significantly they picture "the situation as a whole" – the situation which the clairvoyant is meant to interpret. The nascent mental faculties operating through still dominant emotions (or collective cultural incentives) act as a centralizing and whole-making power. What the intelligence perceives in its concentration is the function of every inner impulse and outer events in the open field of a "personality" still unclouded by egoism.

	At this fourth stage of the five-fold sequence the new technique required for the development of individualized consciousness is revealed: CONCENTRATED ATTENTION.`
},
{ 
	sign: "Aries",
	degree: "10",
	title: "A TEACHER GIVES NEW SYMBOLIC FORMS TO TRADITIONAL IMAGES.",
	keynote: `KEYNOTE: Revision of attitude at the beginning of a new cycle of experience.`,
	description: `This phase is the fifth of the second five-fold sequence, and in it we find expressed the capacity to restate the problem inherent in the first phase, i.e. the problem of focusing one's energies upon emotional drives and cultural values which exclude far more than they include. The subsequent stages of development taken together have added considerably to this attitude; as a result, there arises in the consciousness a desire to reformulate at a new level much that had been taken for granted because it indeed originally had been an evolutionary necessity. The very concrete emotion-arousing images of the past can now be reinterpreted as "symbols" with a wider scope of meaning.

	At this fifth stage a new dimension of consciousness is discovered, revealing higher possibilities of experience and mental development. This is a phase of ABSTRACTION and of emotional allegiance.`
},
{ 
	sign: "Aries",
	degree: "11",
	title: "THE RULER OF A NATION.",
	keynote: `KEYNOTE: The power resulting from the format integration of the collective desire for order.`,
	description: `At this stage of the cyclic process this symbol refers to the appearance of the (personal) ego as the central manifestation of a type of "order" which transcends and seeks to rule the emotional and instinctual drives of the individual person. Actually the ruler at this social-political and mental level of integration is often the one who is being ruled by collective pressures. Nevertheless, a desire for a larger type of integration has now emerged. It is no longer biological-impulsive (Aries 1°) or emotional-personal (Aries 6°), but social-collective and institutional. At this ego level, laws and the restrictive power of a police force are dominant features. Psychologically speaking, this means that the integrative principle is the limited, more or less narrow "I am" realization. It manifests itself as the personal ego exerting its will to control the reactions of the bio-psychic organism.

	This is the first stage of the third five-fold sequence of the cyclic process. It indicates a CENTRALIZATION OF POWER at the level of a rigidly structured consciousness.`
},
{
	sign: "Aries",
	degree: "12",
	title: "A TRIANGULARLY SHAPED FLIGHT OF WILD GEESE.  ",
	keynote: `KEYNOTE: An idealistic reliance upon a mental image of universal order.   `,
	description: `The wild goose is the mystical bird, hamsa, of Hindu tradition. This word, which has recurred in various cultures (the Hansa League of Germanic cities in the late Middle Ages, and El Hanza, the founder of the occult Brotherhood of the Druzes in Lebanon, during the era of the Crusades), has always had at least an undertone of integration at an expansionistic level, spiritual or economic. The Hindu hamsa was the symbol of man's transcendent soul. What previous interpretations of this Sabian symbol have failed to grasp is that the flight of geese presents not only a remarkably geometrical V-shape moving through the sky, but also that this flight is seasonal and therefore attuned to planetary rhythms. Thus, it symbolizes cosmic order, in contrast with the social-political order within a nation which is represented by its ruler. It is order made visual on the background of the clear sky. It is a "celestial" type of order, even though it is earth-born birds which reveal it by their ability to keep their flight structured. The symbol therefore refers to the Soul-consciousness as visualized by the heaven-oriented mind. Yet this soul-consciousness can be called transcendent because it has not yet become "incarnated."

	Because this is a second stage in the third five-fold sequence begun with Phase 11, we have to consider what it pictures in contrast to the preceding symbol. A basic dualism of consciousness is thus suggested. We see arising a potential conflict between cosmic and social principles of order. The principle of COSMIC ORDER polarizes the all-too-human reliance on the social concept of law and order.`
},
{ 
	sign: "Aries",
	degree: "13",
	title: "AN UNEXPLODED BOMB REVEALS AN UNSUCCESSFUL SOCIAL PROTEST.",
	keynote: `KEYNOTE: An immature evaluation of the possibility of transforming suddenly the status quo.`,
	description: `The symbol pictures the result of a particular attempt to resolve the conflict between two concept-feelings of order. Resolution by violence fails because the ego-power at this stage of the process of individualization is far too strong. "The State" thwarts attempts at popular revolution, because these are premature expressions of a consciousness which is not free, but can only react "wildly" to constraint and to a central ruling power. It is thus a symbol of immature refusal to conform, in the name of an over-idealistic desire for harmony and peace.

	This is the third stage of the third five-fold sequence. A negative attempt at reconciling the spiritual ideal and the very earthly reality, denying the validity of the latter. It suggests ADOLESCENT FRUSTRATION.`
},
{
	sign: "Aries",
	degree: "14",
	title: "A SERPENT COILING NEAR A MAN AND A WOMAN.",
	keynote: `KEYNOTE: Identification in bipolar relationship with the impersonal rhythm of natural energy.`,
	description: `The symbol for Phase 4 pictures a man and a woman in love walking together. At this new and more mentally stimulated level of experience and consciousness, a third factor appears: the serpent, whose coiling represents the spiral-like process of evolution - not merely "sex" according to the maker of cathartic symbols, Sigmund Freud. We can understand this "triangular" image — man, woman and the serpent — if we relate it to the preceding one in the series, the unexploded bomb of the anarchist or activist. The urge to blow up some structure which somehow has become in the activist's mind a symbol of the Establishment — the ruling elite — is usually the protest of an alienated and often immature mind that refuses relationship, because in the relationship he would occupy a subservient position. In this symbol, the serpent represents the acceptance of relationship by the two polarized human beings.

	There must be a polarization before there can be fulfillment. The tragedy of so many contemporary lives is that, having become sharply individualized, the men and women cannot find their truly matching polar-opposite. Because they are not fulfilled at the root level of human emotions and vitalistic forces, they pass their lives seeking the ideal complement, often glamorized as the "soul mate." This search can find its expression at several levels. At the mystical level we have the examples of the "spiritual marriage" of Saint Francis of Assisi and Santa Clara, or recently of Sri Aurobindo and Mother Mira.
	
	The Adam and Eve story (in Hebrew, Ish and Isha - much more significant names!) refers to this principle of polarization, although the story has been turned upside down by priestly intellects to serve their purposes. Adam and Eve accepted the Presence, not of the Tempter, but of the Individualizer, who sought to have them born out of the womb of unconscious passivity to Nature's God. But the result of the experience frightened them. They "hid"; they failed in the great test of individualization, and in this sense the archetype of that failure is deeply imbedded in man's generic unconscious. It is repeated time after time.
	
	Modern "individuals" are confronted with another test, but they do not understand its meaning. It is the test of polarized conscious participation in the evolutionary process - a polarization that could dissolve alienation, isolation and egocentricity. In a sense at least, this was the old Tantric concept in India; but today many young people accept the concept only superficially and miss its real essence. They cannot understand the meaning of entering into the serpent, i.e. of developing eonic consciousness and that transpersonal living which once was characterized by the words: Not I live, but Christ lives me - Christ, whose symbolic number in Gnosticism is 888.
	
	At this fourth stage of the third five-fold sequence, we are confronted with an image suggesting the transpersonal way to the "cosmification" of desire and the conscious acceptance of polarization as the solution of the problems generated by individualization. But this need not mean what is currently meant by "sex" and the glorification of the orgasm. It implies rather the RITUALIZATION OF RELATIONSHIP.`
},
{ 
	sign: "Aries",
	degree: "15",
	title: "AN INDIAN WEAVING A CEREMONIAL BLANKET.",
	keynote: `KEYNOTE: Projecting into everyday living the realization of wholeness and fulfillment.`,
	description: `In Christian tradition one hears of Jesus' "seamless robe." In Asia one is told of the "spiritual vesture" of the Perfect Ones. The man who has attained the spiritual state is figuratively robed in the universe — and more precisely, in the Milky Way, the Great White Robe of interwoven stars. This is the ultimate kind of weaving. There was also Penelope's weaving and unweaving, waiting for the return of her polarizing mate. The mind of the American woman in which these symbols took concrete form could think only of "Indian weavers." For the white man who is hungering for symbols of a state of living in total harmony with the universe, the traditional Indian can be glamorized as the answer to the inner emptiness of the city-dweller surfeited with artificial values. At any rate, we may thus prefigure a future state of fulfillment in conscious harmony and unpossessive love.

	If this symbol comes to the consciousness of the inquirer after meaning, deliberately or through an aleatory act of revelation (like the act of throwing sticks to obtain an I Ching symbol), implied is the profound fact that every individual has as his ultimate conscious task the weaving of his "immortal body," his Gnostic Robe of Glory. It may sound very mystical and "far out," but there is a moment in every cycle when, in however small a degree, every individual may be confronted with the potentiality of a fulfilling act of self-realization and may, ever so relatively, find himself "clothed in light" for an instant.
	
	This fifth stage of the third five-fold sequence of symbols ends the first of the twenty-four "scenes." We are told by it that the FULFILLMENT OF DESIRE is a possibility, at whatever level and in however incomplete a manner it may be experienced.`
},
{
	sign: "Aries",
	degree: "16",
	title: "NATURE SPIRITS ARE SEEN AT WORK IN THE LIGHT OF SUNSET.  ",
	keynote: `KEYNOTE: Attunement to the potency of invisible forces, of nature.`,
	description: `In the light of personal fulfillment (symbol of sunset and wisdom) man may be able to establish a life-giving contact with natural forces. These are active any time growth processes take place, but man's individualized mind is usually too focused on working for consciously set goals to be able to realize concretely the presence of invisible (or "occult") forces in operation. These forces constitute a specific realm of any planetary life. They are inherent in all "biospheres," on whatever planet. They are non-individualized and un-free energies forming in the substratum of all life processes - thus of the process of integration at the level of the planet-as-a-whole, i.e. the planet as an organism with its automatic systems of growth, maintenance and organic multiplication. In this planetary organism those nature forces act as guiding and balancing-harmonizing factors - somewhat as the endocrine system does in a human body, and behind this system the more occult web of chakra energies related to prana - the solar energy. It is when this energy becomes less dominant - thus symbolically at sunset - or when the body energy is weakened by illness, fasting or sensory deprivation, that it becomes easier to perceive these "nature spirits" and to give them forms that symbolize the character of their activities. These forms differ with the cultural imagery of each human collectivity, retaining nevertheless some basically similar characteristics.

	When this Sabian symbol reaches into the consciousness of a man seeking meaning, it should be seen as an invitation to open his mind to the possibility of approaching life in a holistic and nonrational, intuitive manner.
	
	This is the first stage of the fourth five-fold sequence of cyclic phases. It implies a call to REPOTENTIALIZATION. What this means also is the process of "becoming like a little child."`
},
{
	sign: "Aries",
	degree: "17",
	title: "TWO DIGNIFIED SPINSTERS SITTING IN SILENCE.",
	keynote: 'KEYNOTE: The ability to transform a natural lack of potency into poise and inner serenity.',
	description: `Here we have a symbol which contrasts with the preceding one. In our culture, the "spinster" represents the woman who has been unable to meet or accept the vitalizing power of love and organic fulfillment through biological polarization. Yet the symbol depicts two spinsters, emphasizing that refusing the natural expression of bipolar love has produced a special kind of dualism of experience. The two women are silent because this dualism has a narcissistic character. Life has turned inward seeing itself in a self-created mirroring. We have here the result of a negative inward approach to potency. The ascetic or saint also turns inward, but he accepts a higher non-biological type of polarization: man and God. Just as the activity of nature has a compulsive character, so the resistance of the spinster to biological fulfillment is also compulsive.

	This is the second stage of the fourth five-fold sequence. Like all second stages it reveals a contrasting potentiality of experience which can also be seen to complement or polarize the symbol of the first stage. It refers to the value of a dignified INWARD WITHDRAWAL.`
},
{
	sign: "Aries",
	degree: "18",
	title: "AN EMPTY HAMMOCK STRETCHED BETWEEN TWO TREES.",
	keynote: 'KEYNOTE: A constructive alternation of activity and rest.',
	description: `The symbol refers to the ability to balance outer vitalistic activity and withdrawal from such activity and relaxation. The owner of the hammock is active, but in his consciousness he can hold the image of rest in the midst of reenergizing nature. The concept of following the rat race of business therefore has no hold. Potency may be preserved and extremes avoided. Time is found for recuperation.

	This is a third stage symbol which suggests a middle path between total involvement in instinctual or social drives, and withdrawal in impotent silence and narcissism - thus LIVING RHYTHMICALLY.`
},
{
	sign: "Aries",
	degree: "19",
	title: `THE "MAGIC CARPET" OF ORIENTAL IMAGERY.`,
	keynote: `KEYNOTE: The use of creative imagination.`,
	description: `A way of life refusing a hectic involvement in social competition and waste-producing overproduction allows for the development of unattached and transcendent understanding. The static floor (carpet) on which man's feet (symbols of understanding) rest can become transformed into the means for great flights of imagination and super-physical perception. The period of rest from outwardly directed activity bound to collective normality presents the creative mind with the possibility of surveying in dreams the totality of the present-day social situation, thus "to see whole."

	The fourth stage of the fourth five-fold sequence of symbols invokes the possibility of developing a new technique of perception, A STRIFE-TRANSCENDING AND UNATTACHED OUTLOOK UPON EVERYDAY REALITY.`
},
{
	sign: "Aries",
	degree: "20",
	title: "A YOUNG GIRL FEEDING BIRDS IN WINTER.",
	keynote: `KEYNOTE: Overcoming crises through compassion.`,
	description: `Nature's seasonal rhythms imply an oscillation between living and dying. Through creative imagination man can "fly over" the cycle, and discover means not only to escape from the fatality of seasonal decay or deprivation, but to assist other living entities to survive through crises. Migrating birds fly south (cf. symbol of Aries 12°), but by establishing a partnership with other creatures unable to escape wintry deprivation or death, man can maintain the life of the spirit (symbolized by birds) steady through all crises if, like a "young girl," he is widely open to the promptings of love and sympathy.  

	At this fifth stage of the symbolic sequence we witness human activity motivated by sympathy overcoming the seasonal phase of impotency. Life potency in nature spirits reaches a higher level in the human being. The theme is THE TRANSMUTATION OF LIFE INTO LOVE.`
},
{ 
	sign: "Aries",
	degree: "21",
	title: "A PUGILIST ENTERS THE RING.",
	keynote: `KEYNOTE: The release and glorification of social aggressiveness.`,
	description: `Here we find potency glorified as muscular strength and will-to-power. Because it is potency operating at a harshly competitive level, it can and often does imply the possibility of defeat or disfiguration. In one sense the symbol translates into social terms the primordial struggle for survival of the fittest, adding to it an eagerness for social fame and social power (i.e. money). In another sense, the ring with two fighters in it can be referred to the Tai Chi symbol and the interplay between Yang and Yin. Each of the two types of energy wins in turn. Victory is always temporary in a dualistic world.

	This is the first stage of the fifth five-fold sequence of cyclic phases. Potency and the two-fold possibilities inherent in any release of power are seen operating at the socio-cultural and emotional level. The symbol reveals man's deeply rooted feeling of admiration and envy for whoever can generate OVERWHELMING POWER.`
},
{
	sign: "Aries",
	degree: "22",
	title: "THE GATE TO THE GARDEN OF ALL FULFILLED DESIRES.",
	keynote: `KEYNOTE: Abundance made possible by human togetherness and cooperation.`,
	description: `In contrast to the crude and cruel road to fame and power symbolized by the prizefighter, we now see a symbol of apparently wide-open and effortless fulfillment. Alone, a human being can barely survive in nature's great life drama; in organized groups men can in due time fulfill their desires. The abundant life is in theory open to all. At least this is the ideal, the great dream. This symbol can also be given an erotic meaning, referring to womanhood.                                    

	At the second stage of this series of symbols, the goal of happiness dominates the consciousness of cultural man, the more validly so the more modest his desires. Religious philosophies, like American New Thought, glorify this social feeling of abundance, glamorizing it into an avid COSMIC OPTIMISM and a cult of success.`
},
{ 
	sign: "Aries",
	degree: "23",
	title: "A PREGNANT WOMAN IN LIGHT SUMMER DRESS.",
	keynote: `KEYNOTE: Fecundity`,
	description: `Masculine aggressiveness and the woman's desire for fulfillment (Degrees 21 and 22) are integrated and realized in the expected child. This three-fold sequence can be seen operating at several levels, and the third term, the child, can take various emotional and cultural forms. The basic meaning remains the same. Summer is the period of fruition. Man - at the receptive "woman" level - reaps the fruits of his dynamic activity.

	This is the third stage of the fifth five-fold sequence of cyclic phases. It combines the two preceding ones and suggests INNER FULFILLMENT.`
},
{
	sign: "Aries",
	degree: "24",
	title: "BLOWN INWARD BY THE WIND, THE CURTAINS OF AN OPEN WINDOW TAKE THE SHAPE OF A CORNUCOPIA.",
	keynote: `KEYNOTE: Openness to the influx of spiritual energies.`,
	description: `The principle of abundance is brought to a further stage in this rather cryptic symbol. Physical fruition is shown operating at a more subtle and spiritual level. The wind (pneuma, spirit) blows through the open mind-window and brings into the house of personality a promise of more-than-material potency. Wind blows from a region of high pressure to one of low pressure. As the window curtains are blown inward, the individual consciousness represented by the house is receiving a more concentrated influx of spiritual energies, enabling this consciousness to extend the scope of its awareness and creative expression.

	This message applying to this fourth stage of the five-fold sequence is that inner growth demands not just an open mind but one able to provide a container for a spiritual harvest. The cornucopian shape of the window's curtains suggests that the subtler translucent aspect of the mind (the curtains) has acquired a plastic quality enabling it to be MOLDED BY TRANSPERSONAL FORCES.`
},
{ 
	sign: "Aries",
	degree: "25",
	title: "THE POSSIBILITY FOR MAN TO GAIN EXPERIENCE AT TWO LEVELS OF BEING.",
	keynote: `KEYNOTE: The revelation of new potentialities.`,
	description: `In some unspecified way the symbol is a guarantee that man can operate successfully at two levels of consciousness, if he has previously met the condition mentioned in the preceding symbol. "Be open. Be able and willing to shape your translucent mind in the form revealing spiritual fulfillment. And you will be able to experience life and power on inner as well as outer planes." The implied message is one of faith. Man can only truly experience what he deeply believes he can experience.

	This is the last stage of this fifth five-fold sequence of cyclic phases. It announces the possibility of a new step in evolution, but it is still only a possibility, a promise. The individual is truly ON PROBATION.`
},
{ 
	sign: "Aries",
	degree: "26",
	title: "A MAN POSSESSED OF MORE GIFTS THAN HE CAN HOLD.",
	keynote: `KEYNOTE: Obsession by potentiality.`,
	description: `The mind which finds itself confronted with a totally unfamiliar and as yet unexperienced type of potency finds it difficult at first to adjust to its new world of perception and possibilities of action. He may rush ahead excitedly and lose his bearings. He should try to reach a state of calm watchfulness, and to learn that at this level too there are limits and restrictions, i.e. laws expressing this new type of "order."

	This is the first stage of the sixth five-fold sequence of cyclic phases. This entire sequence of symbols shows us that man at this evolutionary station has to move carefully in his new realm, for his consciousness is not yet fully able to operate in it, except with closely defined limits. It is a symbol of WARNING — a warning against undertaking more than it is as yet safe and sound to attempt.`
},
{
	sign: "Aries",
	degree: "27",
	title: "THROUGH IMAGINATION A LOST OPPORTUNITY IS REGAINED.",
	keynote: `KEYNOTE: Revision of attitude and inner revaluation.`,
	description: `The second stage of a five-fold sequence of phases always reveals a contrast to the first, but not necessarily an opposition. This symbol makes it clear that the mind that has become over-stimulated and obsessed by all it appears to be able to accomplish in some new realm of experience may easily fail. The disciple fails in his test, or at least it seems to him that he has failed. Actually the "failure" may have been meant by his guru to be a challenge to the emergence of a new capacity; generally speaking, this capacity is what one calls "creative imagination." The mind must first "imagine" that which he will then be able sooner or later to actually experience. At this stage it may be difficult to distinguish success from failure.

	Nothing may fail like success, people say. What counts is the development of UNDAUNTED FAITH in the pursuit of one's ideals.`
},
{ 
	sign: "Aries",
	degree: "28",
	title: "A LARGE AUDIENCE CONFRONTS THE PERFORMER WHO DISAPPOINTED ITS EXPECTATIONS.",
	keynote: `KEYNOTE: The necessity for mature preparation and self-criticism.`,
	description: `We see here the tangible results of the situation evoked by the two preceding symbols. Great hopes, excited expectations cannot be sustained. The last symbol reveals the performer's state of consciousness; in this one he is actually made fully aware of having promised - to the many elements of his own personality as well as perhaps to other human beings - more than he was able to deliver. The issue is how to handle this situation. In one form or another, it is an often recurring situation in the life of an individual person. The manner in which it is met determines the individual's future possibilities of development and achievement.

	This is the third stage of this five-fold sequence. What is implied here is the need to be more than "obsessed by potentiality" and subjectively involved in the use of the new powers. The objective results have to be considered, i.e. what this use will do. The individual is not alone concerned, for in a sense mankind as a whole will be affected. What is required, therefore, is an objective inclusiveness of the whole environment; thus a sense of RESPONSIBILITY for what one's actions will produce in people who have been made to expect significant results.`
},
{
	sign: "Aries",
	degree: "29",
	title: "THE MUSIC OF THE SPHERES.",
	keynote: `KEYNOTE: Attunement to cosmic order.`,
	description: `At the fourth stage of a five-fold sequence a technique is often presented. It is based on the experiences implied in the preceding symbols. In this case, what the individual who has entered into a new realm of possibilities of action should learn is the harmonic principles operating in this realm. The music of the spheres is the celestial embodiment of principles of polyphonic interplay. The individual advancing "on the Path" should seek to understand and realize his place in the vast scheme of mankind's evolution, in the immense Chord of the harmony of the universe.

	The message to the seeker for meaning which is implied in this symbol is TO LISTEN TO THE INNER VOICE; to listen without personalizing this Voice in a glamour-producing manner. It is the Voice of the Whole, of which one begins to realize that one is a tiny little part - yet a significant part, for every note of the universal Chord has its place and its ineradicable meaning.`
},
{ 
	sign: "Aries",
	degree: "30",
	title: "A DUCK POND AND ITS BROOD.",
	keynote: `KEYNOTE: The realization of natural boundaries.`,
	description: `After the preceding symbol this may seem anticlimactic. What is shown here is that every form of activity has its limits, and that even the consciousness that has been able to get a glimpse of universal order has to bring down to its own "karmic" field of operation the message of harmony it has heard inwardly. Peace and inner contentment with one's essential destiny (dharma) is required to meet the everyday world. The mystic may experience flights of imagination and transcendent vision, but he must return to the concrete earth and to his task in his social environment. Extensive as the latter may seem it is still very small compared to the galactic field; it is indeed a duck pond compared to the ocean. But it is there that the substance for concrete action has to be found, and every effective activity has to be focused; thus the boundaries imposed by the very nature of this activity have to be consciously accepted.

	This is the last stage in the last five-fold sequence related to the second scene, characterized by "Potency." It leads to the third scene, whose Keyword is "Substantiation." Potency has to become substantiated - it has to mate with substance - in order to be effective power. Power must accept the principle of FOCALIZATION.`
},
{
	sign: "Taurus",
	degree: "01",
	title: "A CLEAR MOUNTAIN STREAM.",
	keynote: `KEYNOTE: The pure, uncontaminated and spontaneous manifestation of one's own nature.`,
	description: `Here we see life substance in its original dynamic form and as it emerged from its spiritual source. This is true whatever the nature of the source may be. In a sense the mountain stream is conditioned by the nature of the soil and by all the forces which in the past have formed the mountain's rock strata: that is to say, by past history. Yet out of this past a new, pure (i.e. unadulterated) release of potentiality has emerged. It is ready to perform whatever work its dharma is to accomplish.

	This is the first stage of the seventh five-fold sequence of phases. Matter is still imbued with great potential energy, energy being matter at its source. It is flowing irresistibly toward its own destiny. It is simply ITS OWN NATURE.`
},
{
	sign: "Taurus",
	degree: "02",
	title: "AN ELECTRICAL STORM.",
	keynote: `KEYNOTE: The cosmic power able to transform all the implications of natural existence.`,
	description: `At this second stage of the five-fold sequence we see a picture which contrasts with the one for the first stage: thus, a celestial display of power versus a clear, lovely-sounding little stream. Back of every natural self-expression stands the tremendous power of the "Soul-field," itself but one of the myriad aspects of the Creative Word that is the origin of this universe. At certain times, this power compels the natural earth-conditioned personality to accept, perhaps in awe, the spiritual potentialities of its "higher" celestial destiny. This experience of power can both illumine and shatter. The next symbol reveals its positive possibilities.

	This is a stage of existence in which "revelation" is implied, at least as a potentiality. The consciousness may be deeply disturbed by THE VISITATION, but the substance of the individual being can be fecundated by the experience.`
},
{
	sign: "Taurus",
	degree: "03",
	title: "NATURAL STEPS LEAD TO A LAWN OF CLOVER IN BLOOM.",
	keynote: `KEYNOTE: The gradual expansion of the individual consciousness after a fecundating experience.`,
	description: `Having been "activated" by electrical energy, the pure water of the mountain stream is able to fertilize the soil which covers itself with small blossoms. "Clover" however, is normally a symbol of the Triad ("Trinity"), and thus of the often-mentioned "three natures" in man. To reach the Flowering garden of mind, the consciousness must proceed by steps. Effort is needed. What is reached is a flowering display of the simple, quite humble kind, yet bees are after it for honey. There is sweetness and energy latent in the blossoms.

	This is the third stage of the seventh five-fold sequence of phases. It is a stage at which one should seek with diligence and determination, but in humility and faith, to reach NATURAL FULFILLMENT.`
},
{
	sign: "Taurus",
	degree: "04",
	title: "THE POT OF GOLD AT THE END OF THE RAINBOW.",
	keynote: `KEYNOTE: Riches that come from linking the celestial and the earthly nature.`,
	description: `In Genesis, the rainbow is the symbol of the Covenant of God with Noah. In all mythologies it expresses, in one way or another, a linking process — or the bridge used by divine beings to communicate with mortals. What the linking process brings to the individual consciousness is elusive, as the rainbow never ends where you are, yet it is the source of symbolic, universally valid wealth. All wealth, in a very real sense, comes from "commerce"; i.e. from the commingling of minds and from contracts, and thus is based on faith in the validity of a promise.

	At this fourth stage of the five-fold process we are given a mode of operation, which reminds us of the symbol for the second stage, "an electrical storm." Man need not be overawed by the celestial display of power, for it leads to a fruitful contact with beings of light. This is a natural kind of COMMUNION, involving a transubstantiation of matter.`
},
{
	sign: "Taurus",
	degree: "05",
	title: "A WIDOW AT AN OPEN GRAVE.",
	keynote: `KEYNOTE: The impermanence of all material and social bonds.`,
	description: `"All natural compounds decay," said the Buddha. The most beautiful and most enjoyed substance loses its potential energy through continuous actualization and the principle of integration and form is withdrawn, leaving the Void — "the open grave" that ends all attachments. The Void is the great challenge: What next? One must begin anew, and if possible at a "higher," i.e. more inclusive and universal, less egocentric, level.

	This fifth conclusive stage of the sequence which deals with root elements and basic actions and responses may seem negative, yet it opens the door to self-renewal. Beyond the personal attachment rises the possibility of participating in a larger sphere of existence. This possibility rarely manifests itself except as one is ready to DISCARD THE PAST.  `
},
{
	sign: "Taurus",
	degree: "06",
	title: "CANTILEVER BRIDGE ACROSS A DEEP GORGE.",
	keynote: `KEYNOTE: The conquest of separativeness through group-cooperation.`,
	description: `The person who has suffered deprivation and loneliness can give new substance to his or her emotional life by participating in a collective project. All great evolutionary challenges imply the overcoming of basic difficulties. A step ahead must be taken, yet an abyss confronts evolving man. It is no longer a personal Void - an "open grave" - but a chasm that is an integral part of the "land" upon which man's evolution must proceed. A link must be built through the power of the collective mind of the group or of the community at large, on the basis of the legacy of the past, to make a bridge over the canyon.

	This is the first stage of the eighth five-fold process of "Substantiation." The man-made bridge built with collective skill gives substance to and demonstrates man's capacity to CONQUER OBSTACLES and to achieve evolutionary continuity as well as expansion in space.`
},
{
	sign: "Taurus",
	degree: "07",
	title: "THE WOMAN OF SAMARIA AT THE ANCESTRAL WELL.",
	keynote: `KEYNOTE: The meeting of the traditional past and of the creative spirit pointing to the future.`,
	description: `The symbol refers to a most important, but usually narrowly interpreted (or interpreted away!) episode of the Christ mythos. Early in his ministry, Jesus meets a Samaritan woman at an ancestral well. This woman belongs to a tribe despised by the Jews; moreover, she is unmarried and therefore on the fringe of even her own society. It is to just that kind of woman that Jesus reveals that he is the Messiah: "I am He," a revelation that he apparently will not bestow even upon his disciples, at least not in words. (Words in occultism are the creative factor.)

	What does this mean? Jesus, as the Avatar incorporating the Christ-Impulse, came to replace the old tribal order with a new order based on universal Love. It is not to representatives of, or even to men still attached to, the old order that Jesus could reveal his spiritual, evolutionary and society-transforming status; they had instead to reach a point where they could discover his avatar-ship - as did Peter just before the Transfiguration scene. But to the woman of Samaria - who, in her openness to love's urgings, had already repudiated any narrow subservience to the old order - Jesus could reveal his function. The highest meets the lowest when this lowest is free from traditional bonds and open to love. The creative future descends first to that which has become chaos. An old order is never open to a new Revelation until it has accepted disorder in the name of that Power which subsumes all forms of order, i.e. Love.
	
	In this second stage of the five-fold sequence, a contrasting element enters upon the scene. It is no longer a collective-cultural effort based on past knowledge — as in the preceding symbol — but a "meeting" that introduces into the collective situation a totally new factor which transcends it. A NEW QUALITY OF BEING is revealed which renders the old patterns obsolete.`
},
{
	sign: "Taurus",
	degree: "08",
	title: "A SLEIGH ON LAND UNCOVERED BY SNOW.",
	keynote: `KEYNOTE: The value of anticipating and preparing for expectable conditions.`,
	description: `Here we have a combination of two factors: "the sleigh," which is a product of traditional skill (cf. Taurus 6° symbol) and the ability man has to foresee and thus to prepare for a future situation. This ability relates this symbol to the one for Taurus 7°, because the woman from Samaria had 'the capacity to receive a revelation of the future state of human evolution, though in a different and subconscious sense. Man should be ready to use past knowledge and skill to meet the demands of a stage yet to come.

	At this third stage of the eighth five-fold sequence we should realize the value of FUTURE-ORIENTED IMAGINATION but also of relying upon the natural order of unfoldment of all life processes.`
},
{
	sign: "Taurus",
	degree: "09",
	title: "A FULLY DECORATED CHRISTMAS TREE.",
	keynote: `KEYNOTE: The ability to create inner happiness in dark hours.`,
	description: `In northern or mountainous countries where the Christmas tree symbol took form, we find a contrast between the tree outside - bare and normally covered with snow - and the tree inside the home - loaded with decorations and gifts for the family. If we follow up the meaning of the preceding symbol, we see that snow has come outside; but the prepared and closely united group has created abundance, beauty and happiness within, overcoming the cold barrenness of the outside world — just as man had overcome, in a previous symbol (Phase 35), the natural obstacle to his progress. The Christ symbol is also included in the background — that is, the vivid faith in a transformed future.

	This fourth stage symbol suggests the ever-present possibility open to man to transfigure the darkness and deprivation of the low point of a life cycle by incarnating in it an antiphonic response celebrating the ever remembered and always expected high moments of life. It evokes man's undying FAITH IN CYCLIC RENEWAL.`
},
{
	sign: "Taurus",
	degree: "10",
	title: "A RED CROSS NURSE.",
	keynote: `KEYNOTE: The compassionate linking of all men.`,
	description: `This symbol reveals the feeling of human cooperation at the stage of pure altruism and service to the social Whole. On that foundation of Christ love (agape, or true companionship), man can reach a still higher level of experience made possible by the refinement of the substance of his being, his consciousness and his will. This goes beyond imagination and faith in the future - beyond Christmas tree celebrations - for it implies going into the dark to bring life and love to the tormented and the deprived.

	At this final stage of the five-fold sequence we see what is finally open as new potentiality to the "widow before an open grave" — the closing symbol of the preceding sequence. Personal attachment in love to a husband or wife has changed level becoming a CONSECRATION TO HUMANITY.`
},
{
	sign: "Taurus",
	degree: "11",
	title: "A WOMAN WATERING FLOWERS IN HER GARDEN.",
	keynote: `KEYNOTE: Development of the powers of the mind on which ego-consciousness is based.`,
	description: `The psycho-mental nature of a human being takes form out of the fulfillment and transcendence of biological functions and drives, much as the bud appears as the sap rises, and bursts forth into bloom. "As the roots, so the flowers" is an old axiom. The consciousness attaches itself to this wondrous efflorescence; it lavishes its attention upon it, its love — alas, usually a possessive kind of love ("This is my garden!"). Thus the ego develops. It may develop in a negative, resentful way if a belated frost destroys the buds. This is the first stage of the ninth sequence of phases, a sequence that basically refers to the overall situation related to the development of the ego. The Keyword here is CULTIVATION.`
},
{
	sign: "Taurus",
	degree: "12",
	title: "A YOUNG COUPLE WINDOW-SHOPPING.",
	keynote: `KEYNOTE: The fascination of the youthful ego with the products of its culture.`,
	description: `The woman waters flowers in her garden: this is the inward-turned attention of the mind reveling in its own flowering. But now we have a scene symbolizing the outward longing of the ego, which has polarized itself and become "man-woman." The "man" aspect is that part of the ego which craves direct participation with society and the world of other egos. Fully to participate requires a special kind of substantiation - and we are still in this third scene, the Keyword of which is "Substantiation." Clothes, goods of various types, adornment, and working tools are needed. The consciousness surveys possibilities; they are defined by organic nature (personal abilities) and by the ambition to succeed in society.

	This second stage is defined in contrast to the first. The ego becomes aware of what society has to offer. Its attention is turned outward. An interplay takes place between the individual and his culture. He is being molded by what he sees and by prospects for growth in social prestige. It is a phase of SOCIALIZATION OF DESIRES.`
},
{
	sign: "Taurus",
	degree: "13",
	title: "A PORTER CARRYING HEAVY BAGGAGE.",
	keynote: `KEYNOTE: Self-mobilization for social advantage.`,
	description: `The "man" spoken of in the preceding symbol is now integrated in a social pattern. He has to carry a load — perhaps a load of debts following an ambitious buying spree, or some other social burden. He is the strong man, the man of ambition who has to take care of the inward-turned "woman" aspect of his consciousness, the aspect that seeks to grow a beautiful "garden" of individual selfhood.

	At this third stage of the ninth five-fold sequence we see the outcome of the first two. The relationship of ego-man and society has taken the aspect of COMPULSION FOR GAIN.`
},
{
	sign: "Taurus",
	degree: "14",
	title: "ON THE BEACH, CHILDREN PLAY WHILE SHELLFISH GROPE AT THE EDGE OF THE WATER.",
	keynote: `KEYNOTE: Returning to simpler joys for revitalization.`,
	description: `This somewhat ambiguous picture suggests the way in which simultaneous activities of different natures can fill the individualizing mind. The consciousness of socialized man operates at two levels, in close parallelism with what goes on in the unconscious parts of the mind (i.e. the sea). Natural urges are half conscious, half unconscious. They exist in a borderland - the wet sands still partly covered by small waves. The children play a little further away,  learning  imaginative  yet  socio-cultural games. The hardworking porter loaded with baggage should remain a little child at times and allow himself to be close to subconscious but natural urges. At least he should do so for a while until he feels surer of himself.

	This symbol suggests that it is better not to attempt at once more than one can achieve through conscious and ego-driven ambition. It refers to the value, at this stage, of close contact with natural energies and simple pleasures, of a LIVE AND LET LIVE attitude.`
},
{
	sign: "Taurus",
	degree: "15",
	title: "HEAD COVERED WITH A RAKISH SILK HAT, MUFFLED AGAINST THE COLD, A MAN BRAVES A STORM.",
	keynote: `KEYNOTE: The courage needed to meet the crises precipitated by social ambition.`,
	description: `The man with the silk hat has seen some of his ambitious efforts bring him social success; but he learns that often "nothing fails like success." The storm may be within him, or it may attack his social status. He is ready to face it daringly. This shows a willingness to accept crises and to go through them — and therefore great character, the soil upon which a higher kind of consciousness may develop.

	This is the fifth and final stage of this ninth five-fold sequence of symbols. It implies a transition to a new level at which the individual who has learned from experience demonstrates a truly mature mind. What is revealed here is CHARACTER under adverse circumstances.`
},
{
	sign: "Taurus",
	degree: "16",
	title: "AN OLD TEACHER FAILS TO INTEREST HIS PUPILS IN TRADITIONAL KNOWLEDGE.",
	keynote: `KEYNOTE: The inadequacy of past knowledge in time of crisis.`,
	description: `During this Act One of the cyclic process the emergence of new  developments is emphasized. In time of crisis — as, for example, the "storm" being braved by the man of the last symbol (Phase 45) — the type of wisdom learned from this past remains in the background to be revived later on in new forms; what is emphasized is change. Traditional concepts are not adequate to confirm the new conditions of existence. Thus whenever this symbol comes to a seeker's attention it indicates that even the most consecrated tradition does not have the real answer to the problem.

	At this first stage of the tenth five-fold sequence of phases of the cyclic process a seemingly negative picture is shown. From the Zen point of view the mind facing trouble should not depend on past concepts but should repeat: "Not this! Not that!" — until the pure Void is reached. We might speak here of the principle of CREATIVE FRUSTRATION.`
},
{
	sign: "Taurus",
	degree: "17",
	title: `A SYMBOLICAL BATTLE BETWEEN "SWORDS" AND "TORCHES."`,
	keynote: `KEYNOTE: Refusing to depend upon the past, the seeker turns warrior, fighting anew the eternal "Great War."`,
	description: `When Gautama, having sought in vain for the answers to his questions among the teachers of tradition, sat under the Bodhi Tree, he had to fight his own battle in his own way, even though it is an eternal fight. The spiritual light within the greater Soul must struggle against the ego-will that only knows how to use the powers of this material and intellectual world. There is no possibility of escape; it is the energy that arises out of the present moment — the inescapable NOW — that the daring individual has to use in the struggle.

	This second stage symbol suggests that salvation is attained through the emergent individual's readiness to face all issues as if there were only two opposed sides. So teaches the Bhagavad-Gita. This is the dharma of this stage of human evolution: a stage of POLARIZATION OF VALUES.`
},
{
	sign: "Taurus",
	degree: "18",
	title: "A WOMAN AIRING AN OLD BAG THROUGH THE OPEN WINDOW OF HER ROOM.",
	keynote: `KEYNOTE: The cleansing of the ego-consciousness.`,
	description: `In this third stage of the present sequence the first two stages should be considered background. The traditional teachings concerning man's nature are somehow reconciled with the youthful enthusiasm that sees in every problem of growth an issue between the "good" and the "bad." The symbol suggests that the real enemy is within the mind; it is the ego and its attachment to possessions. The mind is shown in the likeness of a "bag," now empty and needing to be aired in the sunlight. But the "window" must first be opened and the bag emptied. The phrase "cleansing the doors of perception" has become well known of late. But even more to be cleansed is the container of perceptual images — i.e. the ego mind. The Keyword is PURIFICATION.`
},
{
	sign: "Taurus",
	degree: "19",
	title: "A NEW CONTINENT RISING OUT OF THE OCEAN.",
	keynote: `KEYNOTE: The surge of new potentiality after the crisis.`,
	description: `The symbol need hardly be commented upon. When the mind has been emptied and light has been called upon to purify the consciousness freed from its attachment and contaminations, a new release of life can emerge out of the infinite Ocean of potentiality, the Virgin SPACE. What will it be used for?  

	Because this is a fourth stage symbol we find in it a suggestion of how to approach whatever new phase of life has been not only hoped for, but actually confirmed. The "technique" is simply to allow the infinite Potential to operate in unconstrained SPONTANEITY. This means to have reached a state in which the conscious, rational ego is no longer a controlling factor.`
},
{
	sign: "Taurus",
	degree: "20",
	title: "WISPS OF WING-LIKE CLOUDS STREAMING ACROSS THE SKY.",
	keynote: `KEYNOTE: The awareness of spiritual forces at work.`,
	description: `Any emergence of life potentialities from the depth of the vast Unconscious is answered by the spiritual activity of superconscious forces in a cosmic kind of antiphony. The individual who has taken a new step in their evolution should look for the "Signature" of divine Powers confirming their progress. It may reveal the meaning of what is to come next. The "wing-like clouds" may also symbolize the presence of celestial beings (devas, angels) blessing and subtly revealing the direction to take, the direction of "the wind" of destiny. 

	This is the fifth stage of the tenth five-fold sequence. It concludes a process, having experienced which the individual should find themselves more securely established in their own original nature, receiving the BLESSINGS of super-natural forces.`
},
{
	sign: "Taurus",
	degree: "21",
	title: "A FINGER POINTING TO A LINE IN AN OPEN BOOK.",
	keynote: `KEYNOTE: Learning to discern what in your culture and religion is meaningful to you personally.`,
	description: `This symbol evokes the traditional practice, when one is in need of guidance, of opening at random a Sacred Book (for Christians, the Bible) and spontaneously placing one's finger on a paragraph. We are parts of a cultural-religious whole, and every whole has a message for its many parts, if these are willing to submit their little wills to the great meaning and destiny of the whole. In an even broader sense, the open mind can learn to detect "signatures" in many events which he has allowed to occur. The too great reliance on repeated symbolizations can lead to a schizoid state of over-subjective dependence upon signs and omens.

	This is the first stage of the eleventh five-fold sequence of symbolic phases in the general process of "Differentiation" (Act One). By relying on cultural guidance a person identifies himself with a differentiated type of collective response to a particular environment. It is a state of SUBSERVIENCE TO COLLECTIVE VALUES.`
},
{
	sign: "Taurus",
	degree: "22",
	title: "WHITE DOVE FLYING OVER TROUBLED WATERS.",
	keynote: `KEYNOTE: The spiritual inspiration that comes to the individual in the overcoming of crisis.`,
	description: `Here also we are confronted with a symbol of guidance, and the dove flying over troubled waters reminds one of the story of Noah and the Ark. Noah met his and mankind's crisis courageously and in complete obedience to God's promptings. The test completed, he received the dove's message. It is a message from the Holy Spirit announcing a new Dispensation. This symbolic scene can be applied to personal crises resulting from emotional upheavals or from the irruption of unconscious forces and impulses into the consciousness — if the crisis has been faced in the right spirit.

	This second stage symbol is in contrast to the preceding one because here it is not the product of a culture, a "book," but instead the rhythm of cosmic, God-ordained cycles that reveals its conclusive beat through a living and concretely significant sign — a REWARD TO THE FAITHFUL.`
},
{
	sign: "Taurus",
	degree: "23",
	title: "A JEWELRY SHOP FILLED WITH VALUABLE GEMS.",
	keynote: `KEYNOTE: The social confirmation of natural excellence.`,
	description: `Two elements should be distinguished in this symbolic picture: the gems that result from natural processes, often induced by extreme volcanic heat and pressure, and the finished products of refined craftsmen. Both the gems themselves and the artistry are highly prized and bring prestige to the owner of the jewels. The symbol applies to any product in which culturally acquired skill has embellished or transformed the end results of a lengthy and demanding natural process.

	This is the third stage of the eleventh five-fold sequence of phases. At this stage we are concerned with the social process which brings about a CERTIFICATION OF PERSONAL WORTH.`
},
{
	sign: "Taurus",
	degree: "24",
	title: "AN INDIAN WARRIOR RIDING FIERCELY, HUMAN SCALPS HANGING FROM HIS BELT.",
	keynote: `KEYNOTE: The aggressiveness of human instincts when fighting for their earthly base of operation.`,
	description: `In the mythology of early America, the Indian represents the "savage," close to nature and led by primordial instincts. Alas, our present century has revealed that under far less imperative circumstances so-called civilized man is capable of far more cruel tortures and extermination. This symbol related to a fourth stage seems to imply that violence and aggressiveness are basic components of human nature at the level of the emotions and of a deep-seated identification with a particular culture which insists on regarding men of other cultures as potential enemies.

	What is being confirmed here is the value of a group of men's differences from other groups. We are still in the period of "Differentiation" (Act One of the cyclic process) and the need for a differentiation of human behavior and collective values is still very strong. At the emotional level man apparently still has to believe in VIOLENCE FOR SURVIVAL.`
},
{
	sign: "Taurus",
	degree: "25",
	title: "A VAST PUBLIC PARK.",
	keynote: `KEYNOTE: The cultivation of natural energies for collective use and recreation.`,
	description: `At this final stage of the sequence of symbols focusing on emotional-cultural values, we witness the positive and impressive results of man's collective endeavor to live in peace and to enjoy moments of relaxation. The public park is designed and kept for the enjoyment of all the people of the city.

	This is a symbol of COLLECTIVE ENJOYMENT. The individual finds in the products of his culture an emotional enhancement born of the feeling of "belonging" to a large, organized, peaceful whole.`
},
{
	sign: "Taurus",
	degree: "26",
	title: "A SPANISH GALLANT SERENADES HIS BELOVED.",
	keynote: `KEYNOTE: The ritualization of individual desires.`,
	description: `At this level we see the play of collective values as they affect the individual person and indeed confirm his individuality by giving it a solid basis in a tradition. The individual is still attached to these group-values; he "belongs." Nevertheless, this state is necessary for a safe and secure sense of differentiation within an enfolding whole. Music and the culturally acceptable rituals of love are cultural products, yet each person can use them for the spontaneous fulfillment of his very own desires.

	This is the first symbol in the twelfth five-fold series. It reveals the individual human being making use of his personal status to find fulfillment and a sense of social identity. This is ROLE-PLAYING in its most enjoyable form.`
},
{
	sign: "Taurus",
	degree: "27",
	title: "AN OLD INDIAN WOMAN SELLING THE ARTIFACTS OF HER TRIBE TO PASSERS-BY.",
	keynote: `KEYNOTE: Peaceful adaptation to collective needs.`,
	description: `In contrast to the impetuosity of the Spanish serenader, we now see the quiet and smiling face of an old Indian woman offering for sale the traditional products of her tribal culture. She too is functioning within the culture which has been sustaining her activity through a long life, bringing to her personal peace and inner contentment. In old age, the power of the collectivity once more reasserts itself, overcoming the perhaps wearying effort man makes to assert his uniqueness and individual character.

	At this second stage of the twelfth five-fold sequence the aging mind of the individual peacefully reintegrates itself into the psychic matrix of his group and culture, in serene ADJUSTMENT to the vital needs of the whole of which he sees himself as a fleeting part.`
},
{
	sign: "Taurus",
	degree: "28",
	title: `A WOMAN, PAST HER "CHANGE OF LIFE," EXPERIENCES A NEW LOVE.`,
	keynote: `KEYNOTE: Man's capacity to rise in consciousness and feelings above biological limitations.`,
	description: `After having stated the youthful and the aged approach of the human individual to the use of what his culture has brought to him, the symbolism stresses man's capacity to rise above the limitations which both biological nature and the "normal" social pattern of behavior have tried to impose on him. As in many of the preceding symbols, a "woman" is pictured, because at this early stage of the cyclic process the individual consciousness still has a receptive or "feminine" polarity — as was indicated in the very first symbol of the entire cycle (Aries 1°).

	Whenever this third stage of the twelfth sequence is brought to a person's consciousness, the indication is that he or she should freely open his or her mind to the possibility of always new REBEGINNINGS. Ideally, the new beginning should imply a more mature response to the new possibility of experience.`
},
{
	sign: "Taurus",
	degree: "29",
	title: "TWO COBBLERS WORKING AT A TABLE.",
	keynote: `KEYNOTE: The two-fold character of man's mature understanding.`,
	description: `In symbolism the feet are the symbol of understanding. Understanding differs from mere knowledge because it implies at least some degree of identification in depth with what is being understood. Moreover it is impossible fully to understand anything except when its opposite is taken into consideration. The mental process of understanding — and therefore of appreciation — implies confrontation between two points of view. Thus the mind gains a sense of perspective. The way to dispel a shadow is to have the object illumined (on its own two-dimensional level) by two sources of light. True understanding dissipates any intellectual shadow. The "two cobblers" symbolize two contrasting ways of approaching the understanding of an experience — especially a new experience — and they provide concrete forms which may clothe and protect the understanding.

	This is the fourth stage of this twelfth five-fold sequence. It reveals symbolically the way in which a mature individual mind works in an attempt to gain PERSPECTIVE; a true perspective becomes the foundation upon which to build a new approach to life.`
},
{
	sign: "Taurus",
	degree: "30",
	title: "A PEACOCK PARADING ON THE TERRACE OF AN OLD CASTLE.",
	keynote: `KEYNOTE: The personal display of inherited gifts.`,
	description: `A great person able to display a multitude of gifts is always, at one level or another, the consummation of a long past of efforts and victories. As a great occultist once wrote: "Adepts are the flowering of their races and cultures." The peacock is the bird consecrated to Venus; in occult tradition the Promethean Spirits who gave to animal mankind the divine gift of self-conscious intelligence had come from "Venus" — which may or may not refer to the physical planet we can observe in the sky.

	This is the final symbol of the fourth scene, whose Keyword has been given as "Confirmation." This peacock symbol indeed confirms the social status of the owner of the ancestral estate. It indicates a CONSUMMATION of individual efforts; and it suggests that such a consummation is hardly possible except when a line of "ancestors" — biological or spiritual — forms its base.`
},
{
	sign: "Gemini",
	degree: "01",
	title: "A GLASS-BOTTOMED BOAT REVEALS UNDERSEA WONDERS.",
	keynote: `KEYNOTE: The revelation of unconscious energies and submerged psychic structures.`,
	description: `Within the relative security of a "boat," an individual person can learn to be aware of the as yet hidden contents of man's collective Unconscious — provided this boat (that is to say, his ego that separates him from the collective planetary psyche of mankind) has been given a glass bottom. The conscious mind must have become, in part at least, translucent. This translucency is not direct openness. The window of the mind remains closed, but through it the individual can become aware of the outside — here "outside" means the psychic depths below the normal level of consciousness.

	At this first stage of the "discovery" process one can only speak of vision, not identification. The feeling is one of wonder. "I did not know this could exist! How beautiful)" or "How exciting!" A NEW DIMENSION OF REALITY is perceived by the earnest inquirer.`
},
{
	sign: "Gemini",
	degree: "02",
	title: "SANTA CLAUS FURTIVELY FILLING STOCKINGS HANGING IN FRONT OF THE FIREPLACE.",
	keynote: `KEYNOTE: A rewarded faith in spiritual blessings.`,
	description: `The popular allegory refers to the spiritual blessings which come to the "pure in heart," whose consciousness is likened to that of a little child. Polarized by eager expectation and faith in the existence of celestial Powers, the pure consciousness as yet un-solidified by ego and rationalistic arguments experiences the concrete manifestation of what it had imagined. In this symbol, Santa Claus acts "furtively." The gifts from an imagined and intensely believed in spiritual world must not be examined closely or at length by the reasoning intellect. The would-be clairvoyant is told not to look straight and intently at what he begins to "see"; instead he should cast sideways glances at it, since the sharply focused mind would make the apparition vanish.

	At this second stage of the thirteenth five-fold sequence we have once more a symbol in contrast to the one for the first stage. In order to discover the wonders of the normally unconscious depths of the collective psyche, the individual has to build the proper kind of vehicle (a glass-bottomed boat); but the reception of new blessings from the spiritual realm above (the superconscious) requires mostly faith and purity of heart, and a common type of understanding (stockings) — thus a state of INNOCENCE.`
},
{
	sign: "Gemini",
	degree: "03",
	title: "THE GARDEN OF THE TUILERIES IN PARIS.",
	keynote: `KEYNOTE: The formalization of collective ideals through the application of reason and order to newly discovered aspects of nature.`,
	description: `The gardens of the Tuileries and Versailles are typical representations of the classical spirit and its need for order and symmetry. The reign of the French king, Louis XIV, followed the Renaissance, which was filled with the excitement of a new spirit of discovery and a period of internal troubles. A reaction had to come to consolidate the gains made by the collective mind of European man. Such a consolidation usually leads to another extreme, i.e. formalism and often the narrow intellectual crystallization of dualistic concepts.

	At this third stage of the thirteenth five-fold sequence of cyclic phases we see the contents of the first and second stages brought to the state of clear and lucid, but also formalized, conceptualization. The heavenly gift-bearing Santa Claus has become the paternalistic autocrat, king by "divine right." The warm family circle celebrating the birth of the Deliverer from wintry darkness is now the Court of the king ruled by rigid rituals. There is clarity, but there is also ego-centralization and the worship of FORMALISM.`
},
{
	sign: "Gemini",
	degree: "04",
	title: "HOLLY AND MISTLETOE REAWAKEN OLD MEMORIES OF CHRISTMAS.",
	keynote: `KEYNOTE: A longing for the pre-intellectual state of consciousness.`,
	description: `The intellect ruled by the ego has taken all that had been seen by the translucent mind (the "glass-bottomed boat") and has given it a logical, rational form. Yet old memories of childhood and its naive faith sometimes make their way into the consciousness. They are aroused by what remains of the ancestral images that once had great vitality and power (mistletoe was sacred to the Druids). The holly with its brilliant contrast of red and green recalls a more primitive and magical sense of color, as exemplified in Tibetan art. A nostalgia for more natural and feeling-oriented values tends to lead to a movement of protest — thus, to the intensification of the emotions in the individual personality, or to the Romantic Movement after the post-classical and post-rationalistic European period.

	This is the fourth stage in the thirteenth series. It recalls the fourth stage in the eighth sequence (Phase 39, Taurus 9") symbolized by "a fully decorated Christmas tree." But the vivid experience of childhood now has become only an obsessive or nostalgic memory. It heralds a resurgence of deeper values and aspirations which had been forced back into the collective unconscious. What is stressed here is the value of tradition-based archetypes during the process of "discovery," a RETURN TO THE SOURCE. The contact with archetypes may nevertheless lead to explosive situations.`
},
{
	sign: "Gemini",
	degree: "05",
	title: "A REVOLUTIONARY MAGAZINE ASKING FOR ACTION.",
	keynote: `KEYNOTE: The explosive tendency of repressed feelings and root emotions.`,
	description: `Every movement overstressing one direction calls forth in time an equally extreme movement in the opposite direction. This is particularly true at the level of the dualistic mind symbolized in the zodiac by Gemini. What is rigidly bound in form and convention tends to explode into formlessness. It may do so violently if socially oppressed — through revolution — or at the psychological level in psychosis; or it may withdraw inwardly into the mystical state in which one identifies with an unformulatable Reality.

	This fifth stage is related to the first, for it is the experience of a world of being so far unperceived by the everyday consciousness which starts the process. In the same sense a psychedelic experience may momentarily make the mind transparent to a non-ego-structured realm of consciousness, and may lead to a sustained attempt at understanding what has been revealed of a transcendent Reality. Whether the revolutionary action is violent or peaceful, bitterly resentful or loving, the one desire is TO REACH BEYOND ESTABLISHED FORMS.`
},
{
	sign: "Gemini",
	degree: "06",
	title: "WORKMEN DRILLING FOR OIL.",
	keynote: `KEYNOTE: The avidity for that knowledge which ensures wealth and power.`,
	description: `This symbol superficially considered can be referred to the insatiable drive of modern man for power and wealth, his readiness to accept the risk of failure. But it has a deeper meaning, especially if related to the next symbol. Oil is the end result of the decay of living materials. Drilling for oil may represent the attempt to penetrate to the deep layers of the collective Unconscious and to reawaken the powers of the archaic psyche which once flourished — for instance in the true ceremonial magic of the tribal world, perhaps among the adepts of the fabled Atlantis, or even among the shamans and witch doctors of more recent times. The archaic powers may be "refined" for modern situations, but the almost inevitable result is the release of noxious waste products, "pollution." And there is a pollution of consciousness as well as of the atmosphere man breathes.

	The zodiacal sign Gemini has basically the meaning of insatiable curiosity and avidity for knowledge; it is logically a "human" sign (the Twins). One of the Twins tends to seek power and knowledge from the ancient past, the other to discover a living source of strength and wisdom which is forever being replenished by the celestial downpour of Spiritual Consciousness and love (cf. the next symbol). It is man's nature, alas, to begin with potentially negative emotions and desires.
	
	This is the first stage of the fourteenth five-fold sequence of cyclic phases. It deals with the emotional and, at the present-day level of evolution, socially prized reaction of most human beings to the attainment of new forms of knowledge, i.e. AMBITION.`
},
{
	sign: "Gemini",
	degree: "07",
	title: "A WELL WITH BUCKET AND ROPE UNDER THE SHADE OF MAJESTIC TREES.",
	keynote: `KEYNOTE: Man's primordial faith in the hidden sustaining power of life.`,
	description: `In contrast with the ambitious drive of modern man for power and wealth we now have the image of the eternal search for that which is at the root of all living processes, i.e. water. This search also demands some effort — raising the water-filled bucket — but it is a simple natural effort under the shade of trees which attest to the presence of the life-giving fluid. This presence depends on the cooperation of sky (rain) and earth (the geological formation able to hold the water), and man must develop the intuitive sense which enables him to feel this presence and to make it effectual in his daily life. He must sense the hidden reality which preserves for the use of all living organisms this gift of the "sky," the bounteous rain.

	At this second stage of the fourteenth five-fold sequence of symbols, the power of the collective and bio-spiritual energies which sustain all earth-rooted cultures is stressed, in contrast to whatever the technological mind of man can make available to increase his personal comfort and mastery over matter. The symbol implies A FUNDAMENTAL TRUST IN AND COOPERATION WITH LIFE.`
},
{
	sign: "Gemini",
	degree: "08",
	title: "AROUSED STRIKERS SURROUND A FACTORY.",
	keynote: `KEYNOTE: The disruptive power of the ambitious mind upon the organic wholeness of human relationship.`,
	description: `We are dealing in this sequence of symbols with man's discovery of the new powers residing in his special contribution to the total organism of this planet Earth — his consciousness and aggressive mind. The first stage (Phase 66) dealt with oil, the typical form of energy which the modern mind has made available. (These symbols were revealed before atomic energy was even thought of as a practical possibility.) Now we see in this new symbol a pictorial indication of what the use of this intellect-generated energy inevitably leads to: industrial unrest and violence. As man manages to rape the earth in order to demonstrate his power and intensify his pleasures and his sense of proud mastery, conflicts and disruptive processes are inevitably initiated.

	The arousal is presented to us here in its collective social form because we have reached the emotional-cultural level. The type of power generated by the analytical intellectual faculties is essentially disruptive; it is based on the destruction of matter, and invites egocentric hoarding and spoliation — and, in general, privileges of one kind or another. This leads to a REVOLT AGAINST PRIVILEGES.`
},
{
	sign: "Gemini",
	degree: "09",
	title: "A QUIVER FILLED WITH ARROWS.",
	keynote: `KEYNOTE: Man's aggressive relationship to natural life, as a basis for survival and conquest.`,
	description: `The bow and arrows represent symbolically man's ability to extend the scope of his conquest of nature and to kill enemies in order to build a larger base for the collective development of a culture and an organized society. Implied in the symbol of the arrow is the piercing of a target. The mind of man is essentially a trans-piercing power; it goes through the object toward which it is aimed. It seeks to go through and beyond the obstacles on its path, and this usually implies the destruction of the obstacle. At a higher level — as in the Zen practice of archery — the obstacle is the ego.

	At this fourth stage of the fourteenth five-fold sequence of phases in the cyclic process of human existence we are shown the archetypal symbol of Man, the Conqueror. It may be a conquest of outer nature, or that of instinctual drives and of the limiting power of the ego. It is always CONQUEST.`
},
{
	sign: "Gemini",
	degree: "10",
	title: "AN AIRPLANE PERFORMING A NOSE DIVE.",
	keynote: `KEYNOTE: A superior ability to challenge nature and play with danger.`,
	description: `Through the controlled use of mental powers man is able to challenge the most basic force in nature: gravitation. He enjoys playing with it as a lion tamer with his violent animals. But what he challenges is within himself as well as outside. Gravitation is the universal binding force of the material world. By challenging it man prepares himself to pierce beyond the physical and to reach higher realms of existence. He may lose the struggle, but that prospect makes the effort more exciting. He might gain "immortality."

	This is the final stage of the fourteenth sequence. The symbol for it has a strong sense of finality. No possibility of half measures exist. Man is committed irrevocably to success or failure — at least as a conscious and self-reliant mind. The alternatives are clear-cut. One may describe it as MIND vs. MATTER, or as Man's will against the fate that gravitation so aptly symbolizes.`
},
{
	sign: "Gemini",
	degree: "11",
	title: "NEWLY OPENED LANDS OFFER THE PIONEER NEW OPPORTUNITIES FOR EXPERIENCE.",
	keynote: `KEYNOTE: The power and joy of new beginnings.`,
	description: `These "newly opened lands" can refer to any as yet unexperienced field of potential activity at any level — material, emotional, mental or supermental. We are now dealing with the third level of experience, at which individuality — or at least the ego character — operates more definitely. While in the preceding phases much was said concerning the powers of the mind, this mind was essentially based on the collective patterns of a culture and a society. Now, at this third level, we find the human being essentially engaged in his personal and particular struggle for full and effective individualization. And the initial realization he has to experience is that he has reached a potentially virgin field of consciousness and activity. He is facing the unfamiliar. Anything could happen.

	This is the first stage of the fifteenth five-fold sequence of symbols. Having conquered, at least to some extent, the collective and material energies of nature and society, man has become relatively "separate" from the past. He faces the future. Every step ahead should show him RISING TO THE OCCASION.`
},
{
	sign: "Gemini",
	degree: "12",
	title: "A BLACK GIRL FIGHTS FOR HER INDEPENDENCE IN THE CITY.",
	keynote: `KEYNOTE: Liberation from the ghosts of the past.`,
	description: `While "newly opened lands" theoretically offer virgin fields for experience, in fact those men and women who reach them find themselves conditioned by their own past. They carry the ghosts of their former lives and the memories of collective social patterns with which they had identified their egos. Every new beginning is surrounded with ghosts (or personal and social karma). The racial struggle for equality of opportunity must go on, even if this equality is officially guaranteed by the Law. The struggle is within and takes many forms. The Puritans brought to the theoretically "New World" the fears, the fanaticism and the aggressiveness of their European existence, and these often grew more virulent under the conditions found in the New World. But no field of activity is ever totally "virgin." It has its inhabitants, and they cling to their possessions or privileges. Whoever seeks to be truly an individual must be liberated from the past.

	Here at this second stage we have the usual contrasting type of symbol. The new lands are opened, but they are filled with lives, and the pioneer's mind filled with ghosts, preconceptions, and prejudices or expectations. What is needed is a total LIQUIDATION of the past; virgin minds for virgin fields.`
},
{
	sign: "Gemini",
	degree: "13",
	title: "A FAMOUS PIANIST GIVING A CONCERT PERFORMANCE.",
	keynote: `KEYNOTE: Individual fulfillment in the performing of a social function to which some prestige is attached.`,
	description: `Having entered upon the path of individualized experience that brings him in touch with broader or higher realms of superpersonal inspiration, the individual person is able to become himself a source of inspiration, an agent for Man and the formative Powers guiding human evolution. His role is to mobilize emotions, to present to others an image of what for most people is beyond their mediocre and lukewarm responses to the challenge of becoming "more-than-man" — to experience more intensely and to see farther. This is the role of the true and ideal "virtuoso" (vir meaning strength, manliness; thus "virtue") and, in a far-reaching sense, of the Avatar whose example fascinates human beings, leading them to leave behind their past and to venture forth into new realms of experience.

	At this third stage we see the meanings of the two preceding symbols, synthesized. One moves into new realms and successfully challenges the fears, the insecurity and the lack of self-confidence of the past in oneself —- all negative attitudes which, while conditioned by the social environment, have become engraved upon the unconscious. Having achieved this liberation, one can bring to the environment the power generated by self-discipline, skill and self-confidence. One has become an at least potential SOURCE OF INSPIRATION.`
},
{
	sign: "Gemini",
	degree: "14",
	title: "BRIDGING PHYSICAL SPACE AND SOCIAL DISTINCTIONS, TWO MEN COMMUNICATE TELEPATHICALLY.",
	keynote: `KEYNOTE: The capacity to transcend the limitations of bodily existence.`,
	description: `In order to function in the world of material entities man needs to focus the energies of life in a limited organism and an ego-mind that is formed by the pressures of a particular culture and family background. Yet a time comes when the individual can still transcend the limiting boundaries of culture and ego. An effort should then be made to enter a realm of consciousness in which the communication from mind to mind can take a more direct form, because the minds then operate within the One Mind of humanity. It is then as if two cells in a human body were communicating to each other, perhaps through some kind of invisible nerve channels, or, as it were, from nucleus to nucleus by means of vibratory resonance. At this fourth stage of the five-fold sequence we see the potentiality of a new technique to be used in the "newly opened lands" confronting the pioneers in human evolution. It is a TECHNIQUE OF TRANSCENDENCE. It evidently can also bring confusion and many failures, as well as illusory claims and self-deceit.`
},
{
	sign: "Gemini",
	degree: "15",
	title: "TWO DUTCH CHILDREN TALKING TO EACH OTHER, EXCHANGING THEIR KNOWLEDGE.",
	keynote: `KEYNOTE: The need to clarify one's experiences through actual contacts with like-minded individuals.`,
	description: `This symbol adds something vital to the preceding one. Transcendent experiences and supernormal faculties must be tested and clarified through the use of normal and collectively tested means of communication — which may mean through scientific procedures. The "Dutch children" seem to have been introduced by the subconscious mind of the formulator of the symbol because of an association with neatness and the open spirit of discussion which has prevailed in Holland. They are "children" because the new experiences are still very fresh and require certification; this demands a "clean" and open mind eager to test what is experienced in an exchange of views with one's peers.             

	This is the last stage of the fifteenth five-fold sequence of symbols. It closes the scene of "Discovery." All discoveries must be checked and their validity tested. In old tribal cultures a man's "great dreams" were accepted as valid and acted upon only if another tribesman also had a similar dream. The need for OBJECTIVITY has to be met; and this implies the confirmation of any subjective realization by some similar experience. It implies also the type of dualism inherent in all mental experiences as well as in mental concepts.`
},
{
	sign: "Gemini",
	degree: "16",
	title: "A WOMAN ACTIVIST IN AN EMOTIONAL SPEECH DRAMATIZING HER CAUSE.",
	keynote: "KEYNOTE: A passionate response to a deeply felt new experience.",
	description: `What has been "discovered" not only needs to be discussed and tested through an intellectual exchange which permits its formulation, it also demands "exteriorization." This implies the act of dealing with those who are still unaware of the new knowledge or realization. A public is needed, and it has to be convinced; its inertial resistance to change has to be overcome. This usually requires an emotional dramatization of the issues at stake. Here again, as at the very start of the cycle (Aries 1°), a woman is depicted, which means a person depending upon feelings and fiery images to sway the receptive public.

	This is the first stage in the sixteenth five-fold sequence in the cyclic process. We are dealing now with the exteriorization of the original impulse — i.e. the emergence from the vast ocean of potentiality which constitutes human nature at all levels. What is at stake is a process of communication of new experiences. The mind is called upon to perform its work, but what comes first is the action of that mind which is violently moved and which attempts to move other minds by violent means, the PROSELYTIZING MIND.`
},
{
	sign: "Gemini",
	degree: "17",
	title: "THE HEAD OF A ROBUST YOUTH CHANGES INTO THAT OF A MATURE THINKER.",
	keynote: `KEYNOTE: The transformation of physical vitality into the power to build concepts and intellectual formulations through which knowledge can be transferred.`,
	description: `While in the preceding symbol we see the explosive release of impulses generated by a new realization of what is right and wrong - the "woman" way controlled by feelings - now we have a picture of a process of quiet and steady metamorphosis of biological energy into mind-power, which can be seen symbolically as the "man" way. The symbolism may seem old-fashioned today, but the two contrasting approaches to communication of new experiences remain evident, however one wishes to symbolize them.  

	This second stage of the sixteenth sequence, as is nearly always the case, presents a contrast with the first stage. What we see pictured is the transformation of emotions into mind, of instincts into thoughts - a process of MENTAL METAMORPHOSIS.`
},
{
	sign: "Gemini",
	degree: "18",
	title: "TWO CHINESE MEN CONVERSE IN THEIR NATIVE TONGUE IN AN AMERICAN CITY.",
	keynote: `KEYNOTE: The need for the mind to retain its independence from its physical environment in order to concentrate on its special problems.`,
	description: `Individuals who have entered into a new realm of activity usually find themselves alienated from their social environment. In a sense they "live in the world" (the world of ordinary men still bound to common earthly and biological pursuits) but "are not of the world." They normally seek companions who can speak their language. It may be an "old" language, that of wisdom rather than that of knowledge. China's culture is far older than that of the American masses swarming through greed-infested cities.

	This third stage of the process reveals what may occur when the individual has developed new capacities for experience that may enable him to tap the vast reservoir of the planetary mind of Man. To the common man he appears to speak a foreign tongue. He experiences a process of INSULATION; yet he is never really alone. Here and there he finds those who can understand him.`
},
{
	sign: "Gemini",
	degree: "19",
	title: "A LARGE ARCHAIC VOLUME REVEALS A TRADITIONAL WISDOM.",
	keynote: `KEYNOTE: Contacting the all-human planetary Mind underlying any cultural and personal mentality.`,
	description: `Occult tradition tells us that all cyclic manifestations of the human mind have had a primordial revelatory Source. It speaks of ancient books made of especially treated papyrus leaves and conveying through symbols the archetypal processes at the root of all earthly existence (see Blavatsky's Secret Doctrine). Such volumes, said to remain in the possession of certain Adepts, constitute the "exteriorization" of archetypal knowledge and wisdom. They contain the "seed-ideas" from which the human mind grows, cyclically producing cultures of various types.

	This fourth stage symbol evokes for us the "technique" by means of which the human mind can uncover the foundations of its nature and acquire what might be called SEED-KNOWLEDGE, the knowledge of the structure of cyclic and cosmic manifestations of life on this planet.`
},
{
	sign: "Gemini",
	degree: "20",
	title: "A MODERN CAFETERIA DISPLAYS AN ABUNDANCE OF FOOD, PRODUCTS OF VARIOUS REGIONS.",
	keynote: `KEYNOTE: The assimilation of multifarious knowledge through the synthesizing power of the mind.`,
	description: `From the One, the Many arise in due time. The Original Source gives birth to the mountain stream which, gathering to itself the down-flow of rain water, becomes the large river around which cities are built. These in turn pollute the river on its way to the vast ocean. This modern symbol expresses the fact that man, now at the close of a cultural cycle, is able to gather foodstuffs - mental as well as physical - from many regions of the globe. His diet has acquired a planet-wide foundation; history tells us that the search for salt and spices, then for commodities rare in local regions, provided the impetus for global trade and thus eventually for a planetary consciousness. The results may be satiety and indigestion, and mental confusion caused by lack of discrimination.

	This is the last symbol of the sixteenth five-fold sequence. As is most often the case such a fifth stage implies a certain kind of synthesis or at least a preparation which leads to a new level. The keynote here is indeed ASSIMILATION; the negative potentiality of the symbol is WASTE. `
},
{
	sign: "Gemini",
	degree: "21",
	title: "A TUMULTUOUS LABOUR DEMONSTRATION.",
	keynote: `KEYNOTE: The revolutionary impact of mental concepts upon the collective emotions and desires of man.`,
	description: `This symbol parallels the one that began the process of "exteriorization" (Gemini 16°), but the process is seen here operating definitively at the level of collective responses. The mass of men have been aroused by mental images, slogans and an appetite for the abundance the "ruling class" enjoys. This also applies to the individual person in whom contrasting spheres of activity have taken shape as the result of the mind-based individualizing process. The organic functions make their collective demands upon the lordly intellect. The stage may be set for the kind of "revolution" we call psychoneurosis.

	This begins the seventeenth five-fold sequence of symbols. It sets the stage for a tumultuous process, which may lead to a new approach to the problems resulting from individualization. The repressed or oppressed instincts stage an EMOTIONAL OUTBURST, claiming their due.`
},
{
	sign: "Gemini",
	degree: "22",
	title: "DANCING COUPLES IN A HARVEST FESTIVAL.",
	keynote: `KEYNOTE: The wholesome enjoyment of organic processes and emotional drives.`,
	description: `Again we have an image in strong contrast to the first of this series. From the mind-built city, where workmen claim a larger sphere of social abundance, we find ourselves in the village, where men and women live in far greater harmony with natural and seasonal processes, giving free rein to their emotional instincts. The two poles of a wholesome society - the large industrial city and the agricultural village - should be included; likewise the two poles of a healthy personality - mind and natural emotions - should be active.

	This is the contrasting second stage of the seventeenth sequence of five symbols. It stresses the value of rhythmic, healthful activity in a natural setup, for this leads to an often much needed process of BIOENERGETIC REBUILDING.`
},
{
	sign: "Gemini",
	degree: "23",
	title: "THREE FLEDGLINGS IN A NEST HIGH IN A TREE.",
	keynote: `KEYNOTE: The growth of spiritually creative processes in an at least relatively integrated mind.`,
	description: `In traditional symbolism birds usually refer to spiritual forces, or at least to the higher and freer aspects of the mind. Here we see only the very beginning of a process in what we might also call "the upper chamber" of the consciousness where the creative power of the spirit can be received and assimilated. Fecundated by the spirit and supported by a deeply rooted cultural and vitalistic tradition, man can gradually develop an integral personality. It is essentially three-fold, reflecting the Divine Trinity, in India expressed as Sat-Chit-Ananda.

	This is the third stage of a process which should lead to a deeper and more natural understanding of human existence. It suggests that the ambitious mass protests of aroused and largely blind desires should be transmuted through harmonization with natural drives and in terms of spontaneous responses attuned to the phases of natural evolution. Stressed here is CREATIVE INTEGRATION.`
},
{
	sign: "Gemini",
	degree: "24",
	title: "CHILDREN SKATING OVER A FROZEN VILLAGE POND.",
	keynote: `KEYNOTE: The use of inhibiting circumstances for the development of character and a transcendent approach to the environment.`,
	description: `Winter symbolizes darkness and the restrictions imposed upon living things by cold. Natural life is in a state of hibernation or inward-turned activity. Yet the developing mind can learn to use restrictions and the disciplining power of "cold" external responses to rise above the outer "freeze" and to grow in strength and skill. Man is nature rising above the cyclic oscillation of natural polarities. His way is often the via negativa. He learns rhythmic freedom ("skating") by using the most binding situations ("ice") to demonstrate his transcendent capacity for pleasure and self-mobilization.

	Here again the fourth stage symbol presents us with a special technique. It is a mental technique inasmuch as it is through mind that man can transcend the entropy of the universal process of existence.  We see here indeed man's TRIUMPH OVER ENTROPY.`
},
{
	sign: "Gemini",
	degree: "25",
	title: "A GARDENER TRIMMING LARGE PALM TREES.",
	keynote: `KEYNOTE: Bringing under control nature's power of expansion.`,
	description: `The intellect of man is like a tropical plant in that it tends to expand “wildly” in many directions, seeking direct contact with the sun’s rays. Like a palm tree it uses its dead leaves to protect itself against dry heat, the heat of the realm of mind when deprived of the complementary power of the feelings. A culture is characterized by specific "forms" and "prime symbols"; education's main object, at least in cultural and classical periods, has been to contain the imagination of individuals within these traditional forms. An entirely different approach to education is being attempted in our transitional age.

	At this last stage of the seventeenth five-fold sequence we have reached the level of fulfillment of the impulses which began at the first stage (Gemini 21°) in a tumultuous upsurge of self-assertion and protest against the past. Now this upsurge has found its place in the evolution of mankind and society; and - symbolically speaking - "labor" has become not only unionized, but a strong force in the body politic. Yet the energies released seek constant expansion and therefore have to be controlled. There is need for repeated PRUNING.`
},
{
	sign: "Gemini",
	degree: "26",
	title: "FROST-COVERED TREES AGAINST WINTER SKIES.",
	keynote: `KEYNOTE: The revelation of archetypal form and essential rhythm of existence.`,
	description: `At this third level of "exteriorization" a contact with archetypes and pure forms of individual selfhood is to be sought - also with the characteristic images (Spengler's Ur-symbols) of the culture. Externals are left behind. This is a step beyond "pruning"; it is rather a process of removal of all superficialities of existence. Cyclically, nature helps us to reach this state of bare reality. It is not that we experience the Buddhist's void (sunya), but rather that we reach the essence of our individual being, the form of pure selfhood which is the structuring power underneath all external features - all that belong to the "leaf" realm.

	This is the first stage of the five-fold process, now in its eighteenth phase. In a sense we can speak of it as a stage of ascetic repudiation, but it is also one of ESSENTIALIZATION.`
},
{
	sign: "Gemini",
	degree: "27",
	title: "A GYPSY EMERGING FROM THE FOREST WHEREIN HER TRIBE IS ENCAMPED.",
	keynote: `KEYNOTE: Reaching out toward participation in a larger whole of mind-structured existence.`,
	description: `The contrast between this and the preceding symbol is significant. The first revealed the periodic opportunity nature offers man to penetrate beyond mere appearances and the glamour of existential abundance (the mass of green leaves); now we see at work another process which depends upon the individual - a conscious attempt to leave behind the tribal-instinctual stage of earthbound existence and to emerge into the realm of mind and complex, tense interpersonal relationships (i.e. the city). The "wild" drives of nature are reaching toward a situation in which they will be "tamed.

	This is the second stage of the five-fold sequence. It reveals a period of transition, a more or less clear yearning for a new state of consciousness, and thus for inner transformation. It is a phase of REPOLARIZATION.`
},
{
	sign: "Gemini",
	degree: "28",
	title: "THROUGH BANKRUPTCY, SOCIETY GIVES TO AN OVERBURDENED INDIVIDUAL THE OPPORTUNITY TO BEGIN AGAIN.",
	keynote: `KEYNOTE: A release from unbearable pressures, freeing one for new tasks.`,
	description: `This symbol can easily be misinterpreted, for while it obviously has a connotation of failure, it nevertheless depicts a particular state of the complex relationship of an individual to his community. The bankruptcy proceedings mentioned here should not be construed as referring to a fraudulent type of bankruptcy. At least in the United States bankruptcy does not imply a moral condemnation; rather, it means that individual failure cannot be separated from the health of the community. The special nature of the whole is implied in the failure of the part to perform adequately under particularly harsh economic conditions. A society which enthrones the principle of ruthless competition must also develop mechanisms to exteriorize the principle of compassion. The latter was at first emphasized by Northern Buddhism, and soon after by Christianity. The concept of atonement is directly related to that of release from unbearable economic pressures in bankruptcy.

	This is the third stage in the eighteenth sequence of cyclic phases. In the first two stages we have seen the emergence of a new consciousness based on leaving behind the externals of bio-psychic living in its at least relatively wild and exuberant aspect. Here we have another kind of "leaving behind," a LIBERATION FROM THE PAST.`
},
{
	sign: "Gemini",
	degree: "29",
	title: "THE FIRST MOCKINGBIRD OF SPRING.",
	keynote: `KEYNOTE: The creative exuberance of the human soul in response to basic life experiences.`,
	description: `The mockingbird is able to imitate sounds he hears, but actually he does more than imitate, for he weaves all these sounds into melodies which at times can have joyous amplitude and instinctively creative spontaneity. The symbol refers to the capacity which the talented individual has to take collective material and to transform it under the urge of biological productivity and instinctual love. The song rises, powered by these great natural drives, very much as so-called popular songs rise from the youthful soul in response to deep personal or social emotions.

	At this fourth stage of the five-fold sequence, what is presented to us symbolically is the reaction of the individual who has become sensitive to many life currents in his environment and who is able to exteriorize this welling-up response as a gift to his society, displaying VIRTUOSITY.`
},
{
	sign: "Gemini",
	degree: "30",
	title: "A PARADE OF BATHING BEAUTIES BEFORE LARGE BEACH CROWDS.",
	keynote: `KEYNOTE: The setting of social standards through personal excellence and competition.`,
	description: `In this very American scene we see a very ancient and basic process which can operate at several levels. Society sets certain collectively acceptable cultural standards, and recompenses by prestige and fame the persons who embody them, physically or mentally. This generates emulation and the desire to bring the social images to their most perfect and concrete manifestation. The archetypal image or canon of proportion is thus incarnated for all to behold and be fascinated by. The process of exteriorization is completed.

	This is the last phase of the sixth scene. In the zodiac the spring season has come to a close. It is summer solstice. Fulfillment leads to new demands upon the individual human consciousness. The SHOW is over. Now comes the hour of decision.`
},
{
	sign: "Cancer",
	degree: "01",
	title: " ON A SHIP THE SAILORS LOWER AN OLD FLAG AND RAISE A NEW ONE.",
	keynote: `KEYNOTE: A radical change of allegiance exteriorized in a symbolical act: a point of no return.`,
	description: `We have now reached a square (go-degree angle) to the beginning of the cyclic process. This is a moment of crisis, a sharp turning point. In the zodiacal cycle, at the summer solstice the northward motion of the sun (in "decimation") stops; the sun rises and sets as far north of exact east and west as it can during the year-cycle. Its motion is now reversed. Slowly the sunset points move southward on the western horizon, and the length of the day decreases. In the lunation cycle (from New Moon to New Moon) this is the First Quarter phase. On the "ship" which symbolizes the ego-consciousness floating, as it were, on the sea of the vast Unconscious, the individualized will makes a basic decision. The dominant Yang force allows the Yin force to begin its six-month long rise to power. The "collective" will gradually overcomes the "individual," and at the end the state will overpower the person. Now, however, the individual person enjoys his most glorious hour; he exults in his ability to make a "free decision"- i.e. to act as an individual who selects his life goal and his allegiance.

	This is the first stage in the nineteenth five-fold series of degree symbols. In a decisive act heavy with consequences, the symbolic college youth might realize that he should bring to an end his quest for the ideal companion and enter into matrimony. He assents to the possibility of progeny, of home responsibility. His consciousness accepts a process of fundamental REORIENTATION, implying the stabilization of his energies.`
},
{
	sign: "Cancer",
	degree: "02",
	title: "A MAN ON A MAGIC CARPET HOVERS OVER A LARGE AREA OF LAND.",
	keynote: `KEYNOTE: The ability to expand one's consciousness by stabilizing one's point of view at a higher level.`,
	description: `This is the paradox which confuses so many minds. As long as the intellect restlessly searches for new horizons it is confused by its searching. Accepting a stable focus, the mind can raise its point of observation and see reality in a truer perspective. The individual becomes the whole focused at this particular point for a particular task and function. He can at least reflect the consciousness of the greater Whole, Humanity.

	This second stage symbol establishes a contrast between a stabilizing new allegiance which limits the will, and the capacity to envision life from a wider perspective, thanks to which many lives are seen to converge upon the raised consciousness. At this stage one realizes that by giving up an indefinite search for two-dimensional extension, one gains ELEVATION in the third dimension of consciousness.`
},
{
	sign: "Cancer",
	degree: "03",
	title: "A MAN BUNDLED IN FUR LEADS A SHAGGY DEER.",
	keynote: `KEYNOTE: The need to overcome stagnation and "cold" during trial of endurance.`,
	description: `This rather enigmatic symbol has suggested an exploration in arctic regions; but it seems more relevant to see in it simply the difficult phase imposed by the new allegiance upon the reoriented consciousness. In India the deer was the symbol of Brahma, the Creative God. The antlers represent the extension of the mind-power located in the head. The new path may lead to cold regions requiring insulation from harsh circumstances. There may even be a desire to escape from new responsibilities. The will leads the mind on toward the spiritual North of the soul.

	This is the third stage in the nineteenth five-fold sequence. A period of trials is implied. The focalized mind may seek to escape its limits by venturing forth toward an idealized goal — the North Star, perhaps. This represents A TESTING OF THE WILL.`
},
{
	sign: "Cancer",
	degree: "04",
	title: "A CAT ARGUING WITH A MOUSE.",
	keynote: `KEYNOTE: An attempt at self-justification.`,
	description: `We are still involved in the results of an act which brought about a radical reorientation of one's life. The drives of the bio-psychic organism are still not easily conquered. A multitude of lesser decisions inevitably follows the big and grand gestures of repudiation and realignment. The desires of the body still drown the voice of the "new man." One argues with oneself, hoping to convince oneself that the old impulses are still legitimate.

	At this fourth stage of the five-fold sequence hesitancy and conflicting motives are still inevitable. The mind is very clever at not facing the consequences which follow from desires or even from restlessness. Attempts at RATIONALIZATION are experienced and should be understood.`
},
{
	sign: "Cancer",
	degree: "05",
	title: "AT A RAILROAD CROSSING, AN AUTOMOBILE IS WRECKED BY A TRAIN.",
	keynote: `KEYNOTE: The tragic results which are likely to occur when the individual's will pits itself carelessly against the power of the collective will of society.`,
	description: `The automobile symbolizes the individualized consciousness eager to pursue its own course of action regardless of how it may conflict with the collective consciousness of the community (the train). The symbol implies that at this early stage of the new process which began with this seventh scene, all such individual and relatively anarchistic or law-defying attempts are bound to fail. The driver may live, but his car will be wrecked.

	Lest we consider this phase totally negative, we should realize that most of the time man learns his lessons through relatively destructive experiences - the via negativa of the mystic, or even the strange occult concept expounded in some sects of "salvation through sin." One may speak here more generally of KARMIC READJUSTMENT. This will become evident as the next five-fold sequence is considered.`
},
{
	sign: "Cancer",
	degree: "06",
	title: "GAME BIRDS FEATHERING THEIR NESTS.",
	keynote: `KEYNOTE: An instinctual dedication of self to new forms of life.`,
	description: `The original symbol (which was subsequently altered) spoke here of "game birds"; thus we deal with spiritual forces (birds) placed within a social context. As in the symbol for Cancer 1° we see here the beginning of a process; action is definitely oriented toward the future. A new wave of life is starting and a concrete - and no longer symbolical - preparation is made for it. At a social level - we can speak of the pioneering efforts dedicated to the building of a new culture, new institutions.

	This is the first stage of the twentieth five-fold sequence. It reveals a preparation for rebirth, and a significant note is sounded by the mention of game birds. What is being built is instinctively - but not yet consciously - offered to a higher level of consciousness. The young-to-be are potential sacrifices to feed human beings. Just as tribal men sacrificed virgins to satisfy the gods. Already the meaning of the second half of the cycle (the first degree of Libra, for instance) is implied, just as the entire social process is implied in the formalism of the marriage ceremony. An appropriate key would be SYMBIOSIS, i.e. a deep unconscious cooperation between different levels of existence, the "animal" level producing lives for the sake of the "human."`
},
{
	sign: "Cancer",
	degree: "07",
	title: "TWO NATURE SPIRITS DANCING UNDER THE MOONLIGHT.",
	keynote: `KEYNOTE: The play of invisible forces in all manifestations of life.`,
	description: `To the clairvoyant who visualized these symbolic scenes, the nature spirits (or fairies) most likely were thought of as more or less imaginary or ideal creations. At least they were linked with hidden and mysterious processes in nature, and the "moonlight" emphasizes this otherworldly or elusive character. Thus a contrast is implied between this character and the concrete and material process of building a nest for a physical progeny. The basic concept is that behind all vital processes one can perceive occult forces at work. They operate within a realm often called "astral" or "etheric"; and the moon has a deep influence upon that realm, releasing special solar rays of occult potency.

	This is the second stage of the twentieth sequence. It contrasts the invisible with the visible, the inner with the outer, the dream and the ideal with everyday reality. In a sense this refers to man's CREATIVE IMAGINATION.`
},
{
	sign: "Cancer",
	degree: "08",
	title: "A GROUP OF RABBITS DRESSED IN HUMAN CLOTHES WALK AS IF ON PARADE.",
	keynote: `KEYNOTE: The tendency in all forms of life to imitate higher forms as a stimulus to growth.`,
	description: `This rather strange symbol points to what is essential in all first attempts at developing consciousness and furthering and furthering one’s growth through association with those who have already reached a superior evolutionary or mental level. Every seeker looks for an “Exemplar.” The religious mystic speaks of “the Imitation of Christ.” In Japan the music student sits in front of his teacher playing an instrument, and carefully imitates his every gesture.

	At this third stage of the five-fold sequence we see at work the basic features at the start of all LEARNING PROCESSES. At the next stage we will watch a more advanced, more typically human quest for knowledge.`
},
{
	sign: "Cancer",
	degree: "09",
	title: "A SMALL, NAKED GIRL BENDS OVER A POND TRYING TO CATCH A FISH.",
	keynote: `KEYNOTE: The first naïve quest for knowledge and for an ever-elusive understanding of life.`,
	description: `The “small, naked girl” symbolizes the innocent and spontaneous mind, as yet unclothed in cultural patterns and unrestrained by don’t trying to satisfy its curiosity about what seems mysterious and fleeting. In a sense the pond is the infant’s mind with a very limited scope of consciousness, yet eagerly reaching out to catch the swift and elusive first realizations of the meaning of life.

	At this fourth stage we are confronted with the nascent curiosity about knowledge, a curiosity which makes the little mind reach out in spontaneity, rather than merely imitate the elders. Whenever a person is confronted with this symbol he or she should realize that there is much value indeed in simply reaching out with a pure and unconditioned mind to the most elementary experiences which natural life offers to us. The key here is PURITY IN UNDERSTANDING.`
},
{
	sign: "Cancer",
	degree: "10",
	title: " A LARGE DIAMOND IN THE FIRST STAGES OF THE CUTTING PROCESS.",
	keynote: `KEYNOTE: The arduous training for perfection in order to fully manifest an ideal.`,
	description: `We are still dealing with the evolution of consciousness and of personality at a preliminary stage. The potentiality of a completely formed mind through which the light of understanding will shine brightly is already in evidence, but much work is still to be done. We may meditate upon the transformation of the “pond of water” (in the preceding symbol) into a diamond not yet cut. The conscious mind must acquire solidity so it can be worked on by higher agencies – ideally by the teachers of the community. It no doubt must be a painful operation for the rough stone, but the goal is worth the suffering, the heat, the grinding noise…provided of course the diamond cutter is an expert craftsman – a rare case among teachers!

	At this last stage of the five-fold sequence we once more deal with an operation which when completed will acquire a social value. When fully grown, the game bird” (first stage) may satisfy a hungry stomach; once cut to perfection, the “diamond” may fill a woman with pride. As Keyword we suggest CRAFTSMANSHIP, here meaning especially the training for perfection.`
},
{
	sign: "Cancer",
	degree: "11",
	title: "A CLOWN CARICATURING WELL-KNOW PERSONALITIES.",
	keynote: `KEYNOTE: The value of humor in developing objectivity and independence of mind.`,
	description: `Humor and irony is a powerful tool in assessing the value of socio-cultural realities, and thereby in freeing oneself from glamour and prejudice. Laughter deconditions and often paves the way to a realization that we need not be unduly impressed by what our tradition has more or less forced upon our consciousness. The clown, of course, is the more popular manifestation of this urge to laugh, which seems to be such a basic characteristic of human nature. Caricature and satire are more intellectual forms of the same need for intellectual freedom.

	In this twenty-first five fold sequence we witness the development of true individuality in man. And the first step is a cathartic one – the ability to laugh, which includes the ability to laugh at ones own petty habits and mannerisms – indeed, at one’s pomposity. It is a DECONDITIONING step.`
},
{
	sign: "Cancer",
	degree: "12",
	title: "A CHINESE WOMAN NURSING A BABY WHOSE AURA REVEALS HIM TO BE THE REINCARNATION OF A GREAT TEACHER.",
	keynote: `KEYNOTE: The revelation of latent worth in an experience once it is seen in its deeper meaning.`,
	description: `In contrast to the “clown” symbol, which shows us man’s capacity to criticize and laugh at his superficial mannerisms and automatic habits or gestures, we now have a symbol which demands that we look beyond common appearances and try to discover the “occult” (i.e. hidden) character of every person and every experience.  This symbol has been unduly glamorized: there is no particular reference here to an avatar or messiah, except in the sense that every man is potentially the avatar or manifestation of a Soul that has a definite and relatively unique function in the vast field of activity we call the Earth. To discover this occult potential of being, one requires a deeper or higher “vision,” a holistic perception — which is usually, but not always justifiably, called clairvoyance. The caricaturist also has to develop a special kind of “seeing” to enable him to extract the salient features of an outer personality or of a face. He picks out the most characteristic parts of a whole; the true clairvoyant perceives the essential meaning (or “message” and function) of the whole.

	The contrast between the first and second symbols of this twenty-first five-fold sequence is indeed very significant. There may be no particular meaning in the fact that the nursing woman in this symbol is Chinese. Perhaps the psychic who visualized the scene may have mistaken a Tibetan for a Chinese woman, and unconsciously thought of the rather familiar process through which a new Dalai Lama, or other great Lamas, are searched for among newborn babies. The Keyword is REVELATION.`
},
{
	sign: "Cancer",
	degree: "13",
	title: "A HAND WITH A PROMINENT THUMB IS HELD OUT FOR STUDY.",
	keynote: `KEYNOTE: The power of the will in shaping character.`,
	description: `Here again we see how a personal characteristic reveals what is behind it psychologically and spiritually. The thumb in palmistry signifies the will; a very rigid thumb shows an unbending will; a more flexible one, a more pliable individual. In the original formulation of the symbol the "hand" was said to be "slightly flexed" which may be taken to suggest a more flexible character. Nevertheless, the basic meaning is that individuality can only express itself through a strong character. Whenever this symbol confronts a person or a situation it is shown that a strong will is required to face the issue at stake.

	This is the third stage in the twenty-first five-fold sequence, and the Keyword is CHARACTER.`
},
{
	sign: "Cancer",
	degree: "14",
	title: "A VERY OLD MAN FACING A VAST DARK SPACE TO THE NORTHEAST.",
	keynote: `KEYNOTE: Fulfillment in transcending and changeless wisdom.`,
	description: `This symbol describes the Wise Old Man, an archetypal figure found in all systems of symbolism. In occult terminology the northeast is the direction from which spiritual-cosmic forces enter the Earth-sphere. This is probably because the polar axis of the Earth is inclined by some 23 degrees away from the exact perpendicular to the plane of its orbit. Thus the actual pole of our globe not only differs from the permanent pole of the Earth's orbit, but constantly changes its direction, successively pointing to several large "circumpolar" stars during the so-called processional cycle (or "tropical year," or Great Polar Cycle), which lasts somewhat less than 26,000 years. Because of this inclination of the polar axis, we have the phenomenon of seasonal change. Supposedly during the early Golden Age no such change occurred; a "perpetual spring" reigned. This is the (traditionally) spiritual state. The Wise Old Man faces the Changeless Reality, the true North —- which for us is located in a northeast direction. He faces the great Void, that apparent Darkness which is an intense Light invisible to our senses.

	As this is a fourth stage symbol in the five-fold sequence, there is as usual a hint of technique. Implied is that by consistently and for a long time meditating on the changeless and spiritual reality at the very core of all experiences one can attain the supreme and age-old wisdom. We see in the symbol a way beyond appearances and toward PERMANENCE IN TRUTH.`
},
{
	sign: "Cancer",
	degree: "15",
	title: "IN A SUMPTUOUS DINING HALL GUESTS RELAX AFTER PARTAKING OF A HUGE BANQUET.",
	keynote: `KEYNOTE: The need that exists at an early stage of human growth to materialize the concept of fulfillment.`,
	description: `This may be considered a curious symbolic scene following the preceding, for it pictures a scene of fulfillment - consciously or unconsciously - only in terms reminiscent of the Mohammedan picture of paradise, a place filled with all the good things earthly life provided, only more sparsely. It may also be that the symbol is a reference to the fact that what in European countries is seen rather broadly and spiritually as ‘plenitude of being’ is usually related in the United States to the idea of ‘plenty’. We are hypnotized today by the ideal of physical abundance. Perhaps physical abundance is less mind-haunting than deprivation, and there may at times be a need to ‘turn to superficial things for self-strengthening’. This is the via negativa (negative way) already mentioned. Through satiety a person learns to appreciate and desire asceticism; after months of boredom the modern teenager in an ultramodern ‘progressive’ school is often ready to accept disciplined work.

	This is the last of the five symbols in the twenty-first sequence. It ends this part of the quest for individuality and the process of ‘decision’ - making on a note which indicates a phase of only temporary fulfillment. The darkness in the northeast may have been too much for the consciousness at this stage of the great cycle. The mind yearns to translate what it has seen in purely physical terms. This is perhaps the keynote of American life: the MATERIALIZATION OF THE SPIRITUAL.`
},
{
	sign: "Cancer",
	degree: "16",
	title: "A MAN STUDYING A MANDALA IN FRONT OF HIM, WITH THE HELP OF A VERY ANCIENT BOOK.",
	keynote: `KEYNOTE: A deep concern with problems raised by the process of personality integration.`,
	description: `After a person decides to follow a certain course of action, accepting a new allegiance, the results of this decision at the three basic levels of human experience (actional, emotional-cultural and individual-mental) have to be stabilized and consolidated.

	This is what is meant by the process of personality integration. In Asia the great symbol of this process is the Mandala; in the Christian world we find, in various forms, the symbol of the Cross. The Christian design is often simple and bare; it is its reference to the crucifixion of a God-man that personalizes or emotionalizes it. The Oriental Mandala can take an infinite variety of forms and can encompass a vast multiplicity of contents; it is psychological and cosmic. The square - the foundation of the Mandala - potentially encloses diverse contents. The Cross, on the other hand, represents conflict in action; it is a symbol of tragic overcoming. The Mandala symbolizes integration of opposing trends and multiple bipolar energies.
	
	This is the first stage of the twenty-second five-fold sequence. It reveals a deep effort on the part of the individualized consciousness to reach a solid basis of understanding that will allow it to perceive the structural relationship of every part of the personality to every other part. It is a mental process implying study and an inward-turning of the attention, CONCENTRATION; even more it is a symbol of what might at first be called CONFORMATION — that is, a profound and stabilizing sense of form, but of one's own individual form, not an external socio-cultural pattern.`
},
{
	sign: "Cancer",
	degree: "17",
	title: "THE UNFOLDMENT OF MULTILEVEL POTENTIALITIES ISSUING FROM AN ORIGINAL GERM.",
	keynote: `KEYNOTE: The life urge to actualize one's birth potential.`,
	description: `What is pictured here is simply the process of germination. As it unfolds from the sundered seed the plant pierces the crust of the soil and reaches up toward the light. This is a dynamic process turned outward, in contrast to the more static or introspective process of integration-through- understanding depicted in the preceding symbol.

	Germination is the crucifixion of the seed. The seed becomes the germ, just as the Tibetan student meditating silently and peacefully on the Mandala is followed by the Christian Crusader - and, at a materialistic level of productivity, by the engineer-technologist intent upon transforming the globe for the greatest possible enjoyment of the greatest possible number of human beings.
	
	As usual, the second stage of the five-fold sequence establishes a contrast with the first. Action polarizes meditation. The expanding process of self-actualization — which may mean nothing more than ego-expansion through conquest — contrasts with the introspective study of the structural relationship between, and the meaning of, the various energies and potentialities of one's nature (svarupa in Sanskrit). The Keyword is GROWTH.`
},
{
	sign: "Cancer",
	degree: "18",
	title: "A HEN SCRATCHING THE GROUND TO FIND NOURISHMENT FOR HER PROGENY.",
	keynote: `KEYNOTE: The practical concern with everyday nourishment necessary to sustain one's outreaching activities.`,
	description: `Every mother is originally responsible for the feeding of her progeny, and all the activities into which a person has poured his energy are his symbolic children. He has to feed them with social substance gathered from "the ground" of his community, and to watch with concern over their unfoldment. The tender stem consolidates into the tree trunk, the chicken into the hen, the infant into the theoretically self-reliant and socially wise adult.

	This third stage of the twenty-second five-fold sequence shows the results of the two previous stages. Seed, germ and the growing plant requiring the chemicals of the soil for its daily growth form a clear sequence. What is at stake here is the FULFILLING OF LIFE'S RESPONSIBILITIES.`
},
{
	sign: "Cancer",
	degree: "19",
	title: "A PRIEST PERFORMING A MARRIAGE CEREMONY.",
	keynote: `KEYNOTE: The ritualization of productive interpersonal relationships.`,
	description: `This scene symbolizes the profound need for referring the interplay and the relatively permanent and productive union of all polarities to some third factor which either includes, or transcends and gives spiritual meaning to, the relationship. A conjugal union is essentially and traditionally the union of a man and a woman for the sake of producing progeny able to perpetuate the racial type, the family tradition and the way of life of a particular culture (or "subculture"), including a set of religious beliefs. The married couple is the basic productive unit in our society - as it has been for millennia in all patriarchal societies. The purpose of any established religion (including tribal cults) is to glorify, sanction and bless with a super-personal meaning all personal and interpersonal activities. This occurs through the "sacraments," and indeed through most religious rites.

	At this fourth stage of the five-fold sequence we are given the basic technique used in all processes of effectual social or group integration. It is the technique which takes the form of sociocultural, and thus business or religious, ritualization. Through this technique commonplace individual endeavors acquire SANCTION; that is, they are ritualized and indeed "sanctified."`
},
{
	sign: "Cancer",
	degree: "20",
	title: "VENETIAN GONDOLIERS GIVING A SERENADE.",
	keynote: `KEYNOTE: Happiness as an overtone of social integration and conformity to custom.`,
	description: `Venice can be considered the symbol of a social consciousness risen directly from the unconscious urges of human nature — because the city emerged out of the sea, just as the lotus flower floats on top of the lake, its roots implanted in the bottom mud. The serenading gondoliers "float" over the water, their songs raised to the balconies where the "flower" of consciousness, the beloved, may make her appearance. This play of basic human drives toward acceptance by the consciousness housed in the structures of the ego is performed according to social tradition. Everything plays its part, and man experiences social happiness and a sense of fulfillment.

	This is the fifth of the twenty-second sequence of five symbols. The urge for individual integration represented in the first — integration through meditation on ancient traditional forms — is now reflected in the drive for social integration through the elegant and standardized play of acceptable emotions. The Keyword might be FESTIVITY.`
},
{
	sign: "Cancer",
	degree: "21",
	title: "A FAMOUS SINGER IS PROVING HER VIRTUOSITY DURING AN OPERATIC PERFORMANCE.",
	keynote: `KEYNOTE: The emotional reward accompanying cultural excellence.`,
	description: `If anything represents the type of response that a well-developed society gives to the individual who successfully pours their energy into the skillful externalization of the great images of its culture, it is the opera. The operatic prima donna is not merely a lonely performer, like the piano virtuoso (Gemini 13°); he or she is the star in a collective effort. The opera is not only music, but a story, a mythos, which embodies some of the most basic images and emotions characterizing the culture that gave it birth. Euro-American  culture  is  indeed  extolled — or  condemned — by its operas and their lurid and tragic passions. It is interesting to compare the opera with the equivalent type of social performances and their topics in India, Java or Tibet.

	At this first stage of the twenty-third five-fold sequence of cyclic phases we find the drive toward individualization by means of concrete forms of cultural activity glorified in social and financial success. In its deepest sense the symbol refers to THE PRICE OF SUCCESS — for the individual, as well for as the collectivity acclaiming him or her. What is success really worth? A question few people ask.`
},
{
	sign: "Cancer",
	degree: "22",
	title: "A YOUNG WOMAN AWAITING A SAILBOAT.",
	keynote: `KEYNOTE: The longing for transcendent happiness in the soul opened to great dreams.`,
	description: `Here the symbol pictures the imaginative youthful person who basically cannot be satisfied with what his or her ordinary social environment offers, and who instead is longing for the unknown visitation of which he or she has dreamed. From the unconscious beyond, the concretization of a spiritual image — spiritual because impelled by the "wind" (pneuma, spirit) — is hoped for and expected. The Beloved may come — not in a glittering opera house, but in the silence of the inner sea of consciousness.

	At this second stage of this five-fold sequence the contrast with the first is strongly marked. Will the great dream become concrete? Will the emotion ready to well up in response to the Advent have its chance? Will the EXPECTANCY of the Eternal Feminine be rewarded with reality?`
},
{
	sign: "Cancer",
	degree: "23",
	title: "THE MEETING OF A LITERARY SOCIETY.",
	keynote: `KEYNOTE: An objective and critical approach to the common factors in our culture and to its psychological problems.`,
	description: `The poets, novelists and critics of a society represent the endeavor by especially sensitive and intellectually gifted individuals  to  give  form and  meaning  to  the  most  characteristic situations and interpersonal relationships of their society and culture. They mirror society and at the same time influence and guide its development. It is their function to discuss the significance of what is, and to image what might be. They are both barometers and thermostats, reflectors and projectors of as yet mostly unconscious images.

	With this third stage we reach the level of INTELLECTUALIZATION. Here the individual operates both as an objective mind and an emotional participant in the events and hopes of his day. He makes concrete what to most people may be only a subconscious aspiration or urge.`
},
{
	sign: "Cancer",
	degree: "24",
	title: "A WOMAN AND TWO MEN CASTAWAYS ON A SMALL ISLAND OF THE SOUTH SEAS.",
	keynote: `KEYNOTE: The focalization of complex inner potentialities in harmonic and concrete relationships.`,
	description: `We are dealing here with a special phase of the process of integration. The woman and the two men represent the three-fold aspect of the human personality, particularly at this stage when one of these aspects — the emotional life (the woman) — is facing the possibility, if not the inevitability, of relating itself to both the spiritual and the mental. This confrontation occurs on a small island of the South Seas, and "south" always refers symbolically to the strong and passionate impulses of human nature. Somehow the three-fold consciousness has to develop a harmonious and well-integrated modus vivendi (a specific way of life). If successful, this will release powerful energies and will lead to the next symbolic scene.

	We have reached the fourth stage of the twenty-third five-fold sequence. As is most often the case, we are introduced here to a specific technique — or at least to a problem of technique — in living. The three human beings should become integrated; but the form this integration will take seems left open. It has to be a concrete type of integration in terms of the emotional and biological drives of human nature (an island of the South Seas) and the field of integration is "small." The key to the problem of relationship should be the realization of INTER-DEPENDENCE.`
},
{
	sign: "Cancer",
	degree: "25",
	title: "A WILL-FULL MAN IS OVERSHADOWED BY A DESCENT OF SUPERIOR POWER.",
	keynote: `KEYNOTE: The response of spiritual forces to the integration of personality through positive will-full endeavors.`,
	description: `We are dealing here with a man who uses his will and positive imagination in facing his life problems. To him comes a pentecostal descent of power. He receives the "mantle of power," the grace (baraka in Sufi philosophy) or the Providential assistance which can make him a true leader in his culture.

	In this fifth symbol we witness a more transcendent expression of "success." It is not merely external success (as is given by society to its prima donnas), but a spiritual response, a sign of inner strength and uncommon ENDOWMENT.`
},
{
	sign: "Cancer",
	degree: "26",
	title: "GUESTS ARE READING IN THE LIBRARY OF A LUXURIOUS HOME.",
	keynote: `KEYNOTE: The transference of social privilege to the level of intellectual enjoyment.`,
	description: `We now see the concretization of cultural excellence and wealth at the level at which individuals can exercise their developed mental capacities in comfort. The process is individualized because the library belongs to a private residence, the luxury of which implies an individual's concentration upon the acquisition of wealth. This scene shows the result of such a concentration, including the acquisition of friends who can relax in and enjoy intellectual pursuits.

	This is the first phase of the twenty-fourth five-fold sequence which here begins, and will end, on a note of social opulence and prestige. We are not dealing now with leaders in the intellectual community, but with wealthy guests who apparently seek to improve their minds or to keep up with intellectual trends of the time, thus maintaining CLASS STANDARDS OF INFORMATION. What is at stake here is the need to conform to the requirements of one's social status.`
},
{
	sign: "Cancer",
	degree: "27",
	title: "A VIOLENT STORM IN A CANYON FILLED WITH EXPENSIVE HOMES.",
	keynote: `KEYNOTE: A confrontation with a social upheaval demanding the reconsideration of static values.`,
	description: `The deeper implications of the scene depicted in the symbol are that the socio-cultural elite can always see its position and security challenged by forces beyond its control, even if it may be successful in protecting itself from destruction. The individual may not be able to depend on the standards and values he has acquired through education and through a relatively sheltered and rich life. He has to rise to the occasion, and perhaps to undergo an inner metamorphosis as a result of the crisis he has been able to accept as a personal challenge.

	The contrast between the two first phases of this twenty-fourth sequence is evident: peace in luxury and intellectual development in terms of collective cultural values (reading books), then the challenge to meet a crisis situation produced by uncontrollable karmic forces that could lead to a successful CATHARSIS.`
},
{
	sign: "Cancer",
	degree: "28",
	title: "AN INDIAN GIRL INTRODUCES HER WHITE LOVER TO HER ASSEMBLED TRIBE.",
	keynote: `KEYNOTE: Inner rebirth through a total acceptance of the primordial values manifest in the human body and its natural functions.`,
	description: `Even as this symbol was formulated in the clairvoyant's mind, a few individuals belonging to the American intelligentsia were trying to find in their absorption into the culture of the Indian pueblos of the Southwest a solution to their intellectual artificiality and personal emotional emptiness. Fifty years later this process has gained great momentum, especially among the disenchanted youth of our affluent middle class. The soul — or in Jungian terms, the "anima"— is leading the sophisticated and colorless (white!) intellect to a level of consciousness at which man can again operate in tune with the vast process of the biosphere and recover the simplicity and the inner peace which city life and business deny.

	At this third stage of the twenty-fourth five-fold sequence the situations presented in the two preceding symbols can be seen combined and projected into a possibility of dramatic transformation. What is shown here is an emotional and warm commitment to the RETURN TO NATURE which today appeals so strongly to the new generation, but which Jean Jacques Rousseau, many great Romanticists and Gauguin long ago advocated and exemplified.`
},
{
	sign: "Cancer",
	degree: "29",
	title: "A GREEK MUSE WEIGHING NEW-BORN TWINS IN GOLDEN SCALES.",
	keynote: `KEYNOTE: The intuitive weighing of alternatives.`,
	description: `This symbol seems to show that the "return to nature" pictured in the preceding symbol is only one of two possibilities. Somehow the repolarization of consciousness and life activities implied by that symbol may be more a dream or ideal than a practical reality. In any case, at this stage in the process of individualization two ways are open. The individual person may hesitate before making his decision. His "intuition" (the Muse) is able to show him what the choice is. Perhaps there can be a way of combining the two alternatives. But, as the next symbol implies, the one which in the end has the greatest appeal may not be the "nature" way. The "white boy" may rather bring the "Indian girl" to the city, as in Pocahontas' life story.

	The fourth stage of this sequence of symbols reveals to us the pro and con operation of the mind when faced with a vital decision. Because it is the "Muse" that is doing the weighing, it is apparent that forces deeper or higher than the intellect are actually at work — the intuitive mind, or what Jung calls the "anima," i.e. the psychic function which relates ego-consciousness to the collective Unconscious. What we see happening, at the very threshold of a new cycle, is an INNER PRESENTATION OF ALTERNATIVES.`
},
{
	sign: "Cancer",
	degree: "30",
	title: "A DAUGHTER OF THE AMERICAN REVOLUTION.",
	keynote: `KEYNOTE: The prestige and conservatism of a long-maintained heritage.`,
	description: `Here we have a symbol of the proud preservation of socio- cultural values in a tradition. After several generations the ancestor who was perhaps a violent revolutionist or rabble-rouser - or even a fugitive from justice - acquires a halo of respectability. The tradition that once was born of revolution now extolls "law and order," attempting to suppress any new forms of the same revolutionary spirit.

	This is the last symbol of the section of the cycle referring mainly to the consolidation and concretization of life urges within a stable form of organization. In many instances the scenes presented picture social activities or events, yet at this stage it is the individual person and the problems attendant upon his development that are primarily considered.
	
	This eighth scene with a keynote of "Consolidation," began with the study of a traditional symbol for personality integration, the Mandala; it ends with an example of what occurs when the individual chooses a path which totally embodies and glorifies tradition, a path which ends in a GLORIFICATION OF THE PAST.`
},
{
	sign: "Leo",
	degree: "01",
	title: "BLOOD RUSHES TO A MAN’S HEAD AS HIS VITAL ENERGIES ARE MOBILIZED UNDER THE SPUR OF AMBITION.",
	keynote: `KEYNOTE: An irruption of bio-psychic energies into the ego-controlled field of consciousness.`,
	description: `The occult tradition speaks of three kinds of “Fire”: Electric fire, Solar Fire and Fire by friction. The three Fire signs of the zodiac correspond to these. Aries refers to the ‘descent’ of the spiritual energy of the Creative Word. In its material aspect we know this energy as electricity, and without electrical energy no life processes could exist. Leo represents Solar Fire, the energy which is released from an integrated person, either through spontaneous radiations of apparently nuclear forms of energy, or, at the truly human and conscious level (and also superhuman in more transcendent realms), through conscious emanations (e-mana-tions, from manas meaning ‘mind’ in Sanskrit. Sagittarius is related to the fire by friction, because all social processes are based on interpersonal relations, which imply polarization and often conflict.
	
	The key symbol for Leo depicts a rising of energy from the heart to the head, a ‘mentalization’ process. However, this process is a potentially dangerous one. Thus the original wording of the symbolic scene seen by the clairvoyant referred to ‘a case of apoplexy’ – just as a person standing with their head uncovered for a long time in tropical regions could get sunstroke. The sun can destroy as well as vivify. Without it’s symbolical mate, water, it produces deserts on earth. The realization of atman, the spiritual self, the existence of a formed and steady ego – provided the ego can become a lens of pure crystal focusing the all-pervasive cosmic light of the Brahman without introducing the shadows of pride possessiveness and showmanship. But this ‘provided’ raises a very large question. The transmutation of ‘life’ into ‘mind’ is a difficult process.
	
	This is the first stage of the twenty-fifth five-fold sequence of symbols which opens the ninth Scene. The keynote of ‘Combustion’ for the entire series of fifteen phases hardly needs interpretation. In a general sense the key word for this first degree of the sign Leo could be CONFLAGRATION. The energies of the biological drives as they irrupt, more or less forcefully, into the field of consciousness.`
},
{
	sign: "Leo",
	degree: "02",
	title: "AN EPIDEMIC OF THE MUMPS.",
	keynote: `KEYNOTE: The spreading power of individual crises through a collectivity.`,
	description: `This symbol should be interpreted at two levels without evading the issues posed by its original wording. What does an epidemic imply and why mumps? The broad meaning of an epidemic is that one individual, if infected by a certain type of disease, can spread the disease to a vast number of persons in their environment, and in some cases all over the globe. In the proceeding symbol we were confronted with the individual crises, and its dangerous possibilities for the individual were implied. Now we deal with a process that affects the entire society; this obviously points out that the whole of mankind is potentially affected by, and thus, consciously or not, cannot help being involved in the critical situations faced by any individual or special group of people. Why then an epidemic of mumps? A childhood disease is implied, but it may have very serious consequences for adult men who catch it, since it affects not only all lymphatic glands, especially in the neck region, but also the testicles.

	If the sign Aries symbolizes birth as a natural organism on this Earth, Leo represents (at least potentially) rebirth – at the level of the conscious and mind-based individuality. Thus in Leo man/woman, in this sense, is as yet only a ‘little child’ one might say a would-be initiate, an infant in spirit. The relation of the mumps to the sexual glands is characteristic, for the entrance into the realm of the conscious and individualized mind can affect the sex force, either through over-stimulation and irritation, or in terms of a deliberate ascetic deprivation.
	
	This second stage symbol also provides a contrast with the first. What was an individual issue is now seen as a collective danger. Thus we are dealing with THE INFECTIOUS SPREAD OF INDIVIDUAL EXPERIENCES.`
},
{
	sign: "Leo",
	degree: "03",
	title: "A MIDDLE-AGED WOMAN, IN HER LONG HAIR FLOWING OVER HER SHOULDERS AND IN A BRA-LESS YOUTHFUL GARMENT.",
	keynote: `KEYNOTE: The will to meet the challenge of age in terms of our modern society’s glorification of youth.`,
	description: `While the original reading of the symbol over fifty years ago spoke of the mature woman having dared to bob her hair, today a similar kind of rebellion against aging and the customs of late middle age would manifest itself in different ways. The meaning of the symbol can be extended to any desire an individual woman would have to claim her right to experiences of youth which may have been denied to her, especially when according to the fashion of the day such experiences are considered highly valuable.

	This third stage symbol implies a reorientation of one’s ideal of action in relation to the collective mentality of the social environment; more particularly, a refusal by the individualized consciousness to be bound by biological or social standards. The Keyword: INDEPENDENCE`
},
{
	sign: "Leo",
	degree: "04",
	title: "A FORMALLY DRESSED ELDERLY MAN STANDS NEAR TROPHIES HE BROUGHT BACK FROM A HUNTING EXPEDITION.",
	keynote: `KEYNOTE: The masculine will to conquer his animal nature and to impress his peers with his skill in performing the ancient traditional power rituals.`,
	description: `This symbol may be interpreted at the strictly social level – the hunter’s trophies, his pride in showing them to members of his high-class club, etc. But if one refers to the higher spiritual-mental implications of the sign Leo, one can see in this picture a reference to man’s capacity to overcome the animalistic tendencies of his bio-psychic nature according to certain traditional procedures. The implication of being ‘formally dressed’ is that an important if not the most important, goal the individual had in developing this capacity has been to ‘prove himself’ – to others, as well as perhaps to himself. `
},
{
	sign: "Leo",
	degree: "05",
	title: "ROCK FORMATIONS TOWER OVER A DEEP CANYON.",
	keynote: `KEYNOTE: The structuring power of elemental forces during the long cycle of planetary evolution.`,
	description: `Dwarfing the time allowed to individual human beings, the vast periods of geological evolution not only awe our imagination, but allow the slow yet magnificent work of elemental forces as they mold landscapes and canyons, rocks and mountains. This symbol points to our need to acquire a much vaster perspective on what we are able to do - and on our yearning for prolonged youth and our pride in masculine achievements. The works of nature should make us feel humble and help us to 'planetarize' our consciousness.

	This first stage symbol concludes the first level sequence. It stands in broad pictorial contrast to the first, or rather it seeks to impress us with our vanity as creators of forms and mental achievers. To the dramatic and proud Leo type, it presents a picture of IMPERSONALITY.`
},
{
	sign: "Leo",
	degree: "06",
	title: `A CONSERVATIVE, OLD-FASHIONED LADY IS CONFRONTED BY A "HIPPIE" GIRL.`,
	keynote: `KEYNOTE: The need to transcend our subservience to fashion, in morals as well as in clothes.`,
	description: `This refers to the ever-changing pageant of social values, as ideals of human relationship succeed one another, one generation facing in the next an antithetic picture of what it has been brought up to consider worthwhile and decent. The confrontation may lead to great bitterness, yet it should show us the impermanence of most of what society impresses upon our collective mentality.

	This is the first stage of the twenty-sixth five-fold sequence of phases of the cyclic process. We are dealing now with cultural values and the emotional impact they have upon our character formation. Whereas the first degree of Leo dealt with an individual crisis of reorientation, the sixth degree refers to a collective, cultural and social crisis which challenges us to realize THE RELATIVITY OF SOCIAL VALUES.`
},
{
	sign: "Leo",
	degree: "07",
	title: "THE CONSTELLATIONS OF STARS SHINE BRILLIANTLY IN THE NIGHT SKY.",
	keynote: `KEYNOTE: The power of basic spiritual values which refer to man's common humanity and to all enduring archetypes.`,
	description: `The experience of the night sky with its multitude of stars, especially brilliant in all the countries from which astrology came, is just as basic and archetypal an experience as that of sunrise, full moon and seasonal changes. Every people on this Earth has developed the concept of constellations, probably because of a need to find order in existence and to personalize everything that could be given a permanent form. Such personalizations can be called "psychic projections," but the projection concept should be worked out both ways. If man projects his basic human nature upon the star-filled night sky, is it not just as logical to say that the universe projects its own forever-evolving patterns of order upon human nature? In either case we deal with archetypal factors which endure through a long series of generations.

	This second stage symbol once more stands in perfect contrast to the preceding one. The nearly unchanging patterns of star groups are opposed to the sequence of ever-changing fashions and social ideals. The Keyword here is PERMANENCE.`
},
{
	sign: "Leo",
	degree: "08",
	title: "A COMMUNIST ACTIVIST SPREADING HIS REVOLUTIONARY IDEALS.",
	keynote: `KEYNOTE: The emotional and ideological attempt to return to a state of non-differentiation and chaos as a prelude to a new type of order.`,
	description: `This symbol, beyond all present-day socio-political controversy, represents the activity of destructive or catabolic forces (one aspect of the Indian god Shiva) in answer to the type of confrontation suggested by the symbol for Leo 6°. The old order is confronted by the youthful drive for a new way of life and a new sense of values. As the old order refuses to yield its prerogatives, this refusal polarizes violent revolutionary action. The revolutionary may have beautiful dreams of a "classless" society free from greed and harsh struggles for survival, but the first practical result of his activity almost inevitably appears as "chaos." Yet chaos is a state of being that calls for a new descent of the power to reorganize and differentiate. Alas, such a descent most often is still based on old concepts, and one witnesses a struggle for personal and dictatorial power.

	This is the third stage of the twenty-sixth sequence of five phases, and ideally it could show how the vision of a cosmic order (stage two) might heal the potential conflict between an obsolete Establishment and its youthful challengers (stage one). But reality today presents a more cruel picture of CATABOLIC ACTION.`
},
{
	sign: "Leo",
	degree: "09",
	title: "GLASS BLOWERS SHAPE BEAUTIFUL VASES WITH THEIR CONTROLLED BREATHING.",
	keynote: `KEYNOTE: The need to involve one's most spiritual and vital energies in the creative act' if it is to produce significant and beautiful new forms.`,
	description: `The breath represents the power of the spirit, animator of all living manifestations. Because the glass blower uses his breath to shape the glass vessels, he is a fitting symbol of how deeply any creative individual has to involve his total being in his creation. He is also using the fire of the spirit — transpersonal inspiration — or, in another sense, the fire of deeply felt emotions. Any creative activity which does not involve both the "breath" and the "fire" cannot transform into beautiful artworks — or indeed into any new form of order — the raw materials, remains of the past (the "sand").

	This fourth stage of the twenty-sixth sequence symbolically shows us the technique required in true and successful transforming activity. It always implies CREATIVE INTENSITY.`
},
{
	sign: "Leo",
	degree: "10",
	title: "EARLY MORNING DEW SPARKLES AS SUNLIGHT FLOODS THE FIELD.",
	keynote: `KEYNOTE: The exalted feeling that rises within the soul of the individual who has successfully passed through the long night which has tested his strength and his faith.`,
	description: `The cold air of night having precipitated upon the field of man's consciousness the moisture of his deepest feelings, this widely spread dew is blessed with the light of significance by the rising sun of the new day. Even tears can be transformed into jewels in the light of victory over night and sorrow.

	At this fifth stage of the present sequence we see the potential culmination of the process which began on a note of social and cultural crisis. The would-be reformer has to meet many emotional problems as he begins his work of creation. Creation means transformation; the reformer is actually a transformer if he is truly a creative and inspired individual open to the spirit that "makes everything new." The building of a new society, and of one's renewed personality as well, is just as much a process of artistic creation as the making of a delicate glass vase or a symphony. The Keyword is TRANSFIGURATION.`
},
{
	sign: "Leo",
	degree: "11",
	title: "CHILDREN PLAY ON A SWING HANGING FROM THE BRANCHES OF A HUGE OAK TREE.",
	keynote: `KEYNOTE: The power of tradition as it shelters the beginnings of individual self-expression.`,
	description: `The great Tradition of mankind has been symbolized by a vast tree, every spiritual Teacher being one of its many branches issuing from the one trunk of a primordial Revelation. As a man begins his spiritual journey he is like a child in a state of excitement, playing with rhythmic up-and-down moods. He plays with words and concepts which "hang" from the "branches" of the Tradition — and often the whole quest is mainly a game for him. Yet he is securely held by the tree, protected by its foliage from too great and burning a light.

	This begins the twenty-seventh five-fold sequence of symbols; it deals essentially with the release of emotional intensity at various levels of the individualized consciousness as it reacts to the newly developed potentialities of the mind. We are dealing at this first stage with the SPONTANEOUS ACTIVITY OF THE INNOCENT MIND.`
},
{
	sign: "Leo",
	degree: "12",
	title: "AN EVENING PARTY OF ADULTS ON A LAWN ILLUMINED BY FANCY LANTERNS.",
	keynote: `KEYNOTE: Group-relaxation in fashionable surroundings as an escape from work routine.`,
	description: `While the preceding symbol dealt with the simple and spontaneous pleasure of children, this one refers to the more or less standardized and fashion-dictated relaxation of adults who have left behind their day's work and are exchanging pleasantries and gossip. The "lawn" and the "lanterns" are cultivated; the type of mind displayed in the animated conversations, stimulated by liquor, is thoroughly socialized and not always innocent. The great Tradition has become reduced to a mere social fashion.

	This second stage symbol contrasts with that of the first phase. We have now reached a stage of SOPHISTICATION and involvement in externals and superficial intellectuality or wit.`
},
{
	sign: "Leo",
	degree: "13",
	title: "AN OLD SEA CAPTAIN ROCKING HIMSELF ON THE PORCH OF HIS COTTAGE.",
	keynote: `KEYNOTE: The quieted mind's recollections of crises and joys long past.`,
	description: `The sea captain has steered the ship of his ego-consciousness through seas and storms, maintaining the integrity of his individual selfhood while in close contact with the collective Unconscious. Now retired, he may try to distill wisdom from his many experiences and from his victories over elemental forces. The "swing" of the child-consciousness has now become a "rocking chair" from which one can contemplate past as well as present scenes, gently moving as waves roll over the shore. Peace at last.

	At this third stage we find the consciousness of old age, after having witnessed the spontaneous play of children close to protective nature (Leo 11°) and the fashionable social parties of escaping adults (Leo 12°); three phases of mental development. Keyword: QUIET RECOLLECTION.`
},
{
	sign: "Leo",
	degree: "14",
	title: "A HUMAN SOUL SEEKING OPPORTUNITIES FOR OUTWARD MANIFESTATION.",
	keynote: `KEYNOTE: The yearning for self-actualization.`,
	description: `Behind the many rhythms and drives of individual existence, beyond the child, the adult and the old man, stands the soul seeking always to manifest itself through the personality. This is the transpersonal urge of the spirit, expressing itself in many ways during the whole life span. But most avenues are blocked, and the soul waits until it can wait no longer. Then comes the dramatic release, which may mean a joyous carnival or madness.

	The fourth stage of this twenty-seventh sequence brings a transcendental clue to the technique of living: Let the soul speak out! Allow the power of the true tone of your being to manifest itself smoothly, easily, unobstructed — or expect a variety of consequences. LET the soul manifest!`
},
{
	sign: "Leo",
	degree: "15",
	title: "A PAGEANT, WITH ITS SPECTACULAR FLOATS, MOVES ALONG A STREET CROWDED WITH CHEERING PEOPLE.",
	keynote: `KEYNOTE: The more or less sensational release of energies in a form dramatizing the unconscious aspirations of man's primitive and instinctual nature.`,
	description: `This last picture of the series dealing with the ninth scene, "Combustion," recalls in a collective sense the dramatic event represented by the first (Leo 1°). The street pageant, perhaps a tumultuous carnival, brings men and women to a peak of emotional excitement, and perhaps incandescence. But the pageant had to be planned carefully by individual minds that sought to express themselves in the process of giving a concrete form to the desires and expectations of the collective crowd. The theatricality of the Leo type is fully expressed here.

	This is the fifth stage of the twenty-seventh five-fold sequence of phases. At this stage the mind of the individual is able to give a public DEMONSTRATION of his ability to sway the multitudes by a dramatic presentation of popularized ideals. This leads to a new scene on the cyclic journey around one's own universe, symbolized by the signs of the zodiac.`
},
{
	sign: "Leo",
	degree: "16",
	title: "THE STORM ENDED, ALL NATURE REJOICES IN BRILLIANT SUNSHINE.",
	keynote: `KEYNOTE: The surge of life and love after a major crisis.`,
	description: `The symbol speaks clearly for itself. How brilliant the light after the long "night of the soul"! The battered but unconquered consciousness finds itself exalted in the marriage of sunbeams and rising sap. This indeed is "Release" — light and life singing in the cleansed and refreshed mind, flooded for a while by the waters of feeling.

	This is the first stage in the twenty-eighth five-fold sequence. It is a sequence that reveals consciousness at its most inspiring moments of enjoyment. But these "peak experiences" can operate at several levels. The first and most basic level is that of life itself, and of the overcoming of its many crises — THE JOY AND POWER OF NEW BEGINNINGS.`
},
{
	sign: "Leo",
	degree: "17",
	title: "A VOLUNTEER CHURCH CHOIR SINGING RELIGIOUS HYMNS.",
	keynote: `KEYNOTE: The feeling of togetherness which unites men and women in their dedication to a collective ideal.`,
	description: `Religion in its institutionalized aspect is the attempt to give a transcendental character to the feeling of community. The fellowship of common work needed for substance and security in a dangerous world is exalted in periodic rituals in which the co-workers participate. At such moments the consciousness and feelings of human beings flow into a common mold in which they become refreshed by the experience of shared values and beliefs.

	This second stage symbol presents a contrast with that of the first only in that the collectively human aspect of experience is in contrast to the purely natural and fundamental character of instinctual life. The existence of a volunteer church choir implies a rather steady phase of culture and society. What is sung reflects the special way in which a particular community of human beings — extensive as it may be — interprets the deepest realities of human existence and man's longings for an ideal. The symbol expresses the idealized aspect of TOGETHERNESS.`
},
{
	sign: "Leo",
	degree: "18",
	title: "A CHEMIST CONDUCTS AN EXPERIMENT FOR HIS STUDENTS.",
	keynote: `KEYNOTE: In inquiring into the hidden process of nature, the human mind experiences the thrill of discovery.`,
	description: `Here we reach the level of intellectual analysis and the human ability to control natural processes. This ability is based on the inherited knowledge acquired by a community of men, generation after generation. The symbol stresses this fact, as it presents a teaching situation. The individual demonstrates his power, which is founded on a long series of efforts. He is one link in an ancestral chain which his activity prolongs into the future.

	At this third stage of the twenty-eighth phase of the cyclic process we see man, as an agent of the collectivity of human beings, approaching nature in terms of the possibility of transforming it in order to satisfy his needs or his wants. At the highest level of this activity one can speak of ALCHEMY.`
},
{
	sign: "Leo",
	degree: "19",
	title: " A HOUSEBOAT PARTY.",
	keynote: `KEYNOTE: The enjoyment of temporary freedom from rigidly structured social behavior.`,
	description: `This symbol in a sense duplicates the one for Leo 12°, except that it implies a less conventional and more youth-oriented type of gathering. The houseboat brings an intimacy and a "bohemian" character to the relationships between the participants, while "the evening lawn party" reflects a more socially respectable and superficial kind of interaction between middle-class sophisticates. The houseboat may be anchored, yet it floats on the river which — symbolically at least — extends far beyond the narrow social setup. What is suggested is that in such a gathering, men and women seek to at least get the feeling of the free flow of energies, as an escape from the routine activities of their business or student lives.

	This fourth stage symbol indicates the possibility of finding "release" for natural energies in group entertainment and enhanced interpersonal contacts. It speaks of FREEDOM FROM SOCIAL RIGIDITY.`
},
{
	sign: "Leo",
	degree: "20",
	title: "ZUNI INDIANS PERFORM A RITUAL TO THE SUN.",
	keynote: `KEYNOTE: A return to the glorification of natural energies.`,
	description: `While the first symbol of this five-fold sequence pictured the magnificence of the returning sun after a storm, in this last symbol we see, by implication, man returning to nature and glorifying the sun after the long crisis of "civilized" living in artificial cities. For many years now, the American Pueblo Indian has been for the weary city dweller and the dried-up intellectual a symbol of this "return to nature." After having ruthlessly destroyed him, we come to him as an exemplar of peaceful and harmonious group living.

	This fifth symbol of the twenty-eighth sequence brings us the image of a reversal of our socialized activity and opens for us the way to the deepest release of our long-denied root energies. Natural man links himself consciously to the source of all life on earth. And this means IDENTIFICATION THROUGH WORSHIP — and the sanctification of the creative power.`
},
{
	sign: "Leo",
	degree: "21",
	title: "INTOXICATED CHICKENS DIZZILY FLAP THEIR WINGS TRYING TO FLY",
	keynote: `KEYNOTE: The often-negative and at times ludicrous first experience with spiritual teachings.`,
	description: `In Near Eastern symbolism wine, intoxication, and vineyards always refer to ecstatic experiences and to the contact with mystical or occult schools. "Chickens" here suggest that we are dealing with human beings who are the standardized products of their culture, and more or less undifferentiated specimens of a social norm. Brought accidentally or prematurely to mystical or occult experiences, they usually react to them in a highly confused and "dizzy" manner. What reacts in them is the ego, and the ego can never "fly" (i.e. experience spiritually transcendental realities in an effectual manner).

	This first symbol of the twenty-ninth five-fold sequence presents to us a picture of the unsatisfactory way many people today — especially young people — approach what purports to be spiritual reality. The "food" may be intoxicating, consciousness-expanding, but the inner openings lack depth and constructiveness, whether or not they produce what appears to be wonderful feelings. One may speak here of the danger of PREMATURE EXPANSION OF CONSCIOUSNESS.`
},
{
	sign: "Leo",
	degree: "22",
	title: "A CARRIER PIGEON FULFILLING ITS MISSION.",
	keynote: `KEYNOTE: Spirituality, in terms of training for service to mankind.`,
	description: `In contrast with the intoxicated chicken, we now have the successfully trained carrier pigeon delivering the message it was its function to carry. Here the domesticated bird is seen endowed with a special significance and purpose. This refers to spiritual energies which are being used constructively and which bring to the consciousness messages from other realms. Individual realizations acquire their true meaning only as they fulfill a collective function.

	This second stage symbol clearly presents a contrasting alternative to what the preceding picture revealed. The "release" of higher energies becomes effective and valuable to the extent to which it serves a higher, but concrete and definite, purpose. This is the ideal of the WORLD SERVER.`
},
{
	sign: "Leo",
	degree: "23",
	title: "IN A CIRCUS THE BAREBACK RIDER DISPLAYS HER DANGEROUS SKILL.",
	keynote: `KEYNOTE: The audacity and perseverance required to control and play with the powerful energies of the vital realm in human existence.`,
	description: `The horse has always been the symbol of the vital energies. In a wild state the horse represents the magnificent, raw, impetuous energy of the libido in all its forms. When tamed, this energy is put to man's service. There are men who have dominated their natural energies so well that they can perform spectacular feats. Here these achievements are seen within the context of a social function and expressing a flair for dramatics.

	At this third stage, the ego is in control; he is a great showman, but he serves a purpose. The performance stirs the imagination of the young consciousness. It raises the mind above the commonplace. The Keyword is VIRTUOSITY.`
},
{
	sign: "Leo",
	degree: "24",
	title: "TOTALLY CONCENTRATED UPON INNER SPIRITUAL ATTAINMENT, A MAN IS SITTING IN A STATE OF COMPLETE NEGLECT OF BODILY APPEARANCE AND CLEANLINESS.",
	keynote: `KEYNOTE: An interior focalization of energy and consciousness at the expense of all forms of outward activity and care.`,
	description: `This traditional image of the Hindu holy man in the typical Western mind may well hide the fact that without proper training and intense concentration, what we usually consider spiritual attainment, self-realization and the "God experience" is not possible. The "intoxicated chickens" of the Leo 21° symbol must learn self-discipline if they want to "fly." There can be no halfway measures if the goal of true Yoga is to be reached.

	This fourth stage symbol, as usual, suggests a certain kind of "technique," or at least an adequate means to reach an envisioned goal. The means is TOTAL CONCENTRATION.`
},
{
	sign: "Leo",
	degree: "25",
	title: " A LARGE CAMEL IS SEEN CROSSING A VAST AND FORBIDDING DESERT.",
	keynote: `KEYNOTE: Self-sufficiency in the face of a long and exhausting adventure.`,
	description: `The camel here represents a living organism that is able to sustain itself independently of its environment at the start of a trying journey. (The original formulation of the symbol did not refer to "a man on camel back.") The organism carries within itself what is absolutely needed for survival. At the deeper human level 'of consciousness it is easy to see the value of self-reliance and self-sufficiency as one enters the occult Path leading to a more dynamic and more inclusive realm of existence.

	The camel carries water within its body, and it is said that the dromedary is able to utilize the matter stored in its large protuberance as food. The suggestion here is that in order to be released from bondage to the "old world" we should be completely self-contained emotionally; having absorbed the mental food which this old culture has given us, we are ready to face "the desert," nothingness, Sunya . . . until we reach the "new world." We need TOTAL INDEPENDENCE from our surroundings and utter SELF-RELIANCE.`
},
{
	sign: "Leo",
	degree: "26",
	title: "AFTER THE HEAVY STORM, A RAINBOW.",
	keynote: `KEYNOTE: Linking above and below, the Covenant with one's divine nature, promise of immortality.`,
	description: `In the Bible the rainbow is the sign of the Covenant established by God with Noah (the cyclic "Seed man") guaranteeing that no longer shall the destructive power of Spirit (the Shiva aspect of the Divine) be used to destroy life on earth. As we come to the third level of the scene of "Release," we find the man who has been able to weather the cathartic storm face-to-face with his divine Archetype; because he has been victorious, a link has been established with his divine Soul-being. Both the human and the divine partners should remain thus linked. H. P. Blavatsky's last words are said to have been: "Keep the Link unbroken" — the Link she forged With the Trans-Himalayan Brotherhood that had sent her into the darkness of nineteenth-century materialism for this purpose.

	At the first stage of this thirtieth sequence, the symbol of the rainbow shows us the need to maintain a state of open communication between the Sky and the Earth within our total being — not for the sake of finding an ever-elusive "pot of gold" at the end of the rainbow, for this end is never to be reached, but in order to face the totality of our individual selfhood as it is projected in the many-hued dome of our sky-flung consciousness. After every successfully met crisis, the REVELATION OF WORTH comes to us, and with it comes the promise of success, if only we do our part.`
},
{
	sign: "Leo",
	degree: "27",
	title: "THE LUMINESCENCE OF DAWN IN THE EASTERN SKY.",
	keynote: `KEYNOTE: The exalting challenge of new opportunities at the threshold of a new cycle.`,
	description: `While the rainbow marks the end of the crisis, early dawn indicates the real beginning of the new period of activity. In the Biblical symbolism Noah plants his "vineyard" — he begins to teach the "secret doctrine" which he inherited from those Ben Elohim (Sons of God) who had not been sucked down into whirlpools of materiality. After the "peak experience" in which we touch our "divine" potentialities comes the struggle with everyday problems. But at first the state of deep inner exultation remains within us. We are aglow with its promise.

	The crisis and the blessings it has brought to us are relatively unusual events; every day has its dawn, which we should meet with a pure heart and a clear mind. Alpha (dawn) and omega (the concluding peak experience) are opposites, yet the same. The Keyword here is ILLUMINATION.`
},
{
	sign: "Leo",
	degree: "28",
	title: "MANY LITTLE BIRDS ON A LIMB OF A BIG TREE.",
	keynote: `KEYNOTE: A wide, and perhaps confusing, openness to a multiplicity of inspiring potentialities.`,
	description: `There is a stage in the spiritual life — which is not different from the everyday life — during which the consciousness, aspiring to greater realizations or more impressive forms of self-expression, feels itself flooded with new ideas and new possibilities. This can be very exciting, yet also quite confusing. It becomes necessary to focus oneself by limiting one's field of vision and activity.

	This third stage of the thirtieth five-fold sequence brings us the results of the two preceding ones. We should try not to be OVERWHELMED WITH POTENTIALITIES, yet should enjoy the wonderful lightness of feeling this may bring after perhaps many days, months or years of frustration or darkness.`
},
{
	sign: "Leo",
	degree: "29",
	title: "A MERMAID EMERGES FROM THE OCEAN WAVES READY FOR REBIRTH IN HUMAN FORM.",
	keynote: `KEYNOTE: The stage at which an intense feeling-intuition rising from the unconscious is about to take form as a conscious thought.`,
	description: `The mermaid personifies a stage of awareness still partially enveloped by the ever-moving and ever-elusive ocean of the collective Unconscious, yet already half formulated by the conscious mind. Any creative thinker or artist knows well the peculiar mixture of elation and anxiety characterizing such a stage. Will the intuitive feeling fade away reabsorbed into the unconscious, or will the inexpressible realization acquire the concreteness and expressible form of a concept or a definite motif in an art form?

	This fourth symbol in the thirtieth five-fold sequence suggests that the fire of desire for concrete and steady form burns at the root of all techniques of self-expression. An unconscious energy archetype is reaching toward consciousness through the creator, as cosmic Love seeks tangible manifestation through human lovers. The whole pre-human universe reaches eagerly to the human stage of clear and steady consciousness. It is this great evolutionary urge, this elan vital, which is implied in this symbol of the mermaid seeking human incarnation — the YEARNING FOR CONSCIOUS FORM AND SOLIDITY.`
},
{
	sign: "Leo",
	degree: "30",
	title: "AN UNSEALED LETTER.",
	keynote: `KEYNOTE: The realization by the individual that all thoughts and all messages are inevitably to be shared with all men.`,
	description: `Coming as it does as the end of this tenth scene and linked with the last degree of the zodiacal sign, Leo, this symbol seems at first quite puzzling; when it has been thought of as an isolated symbol, its essential meaning has not been apparent. The fact that a letter is unsealed does not imply a trust that other people will not read its contents, but rather the idea that the contents are for all men to read. The letter contains a public message in the sense that when man has reached the stage of true mental repolarization and development — which we see in the very first symbol for Leo — he has actually become a participant in the One Mind of humanity. Nothing can really be hidden, except superficially and for a brief time. What any man thinks and deeply realizes becomes the property of all men. Nothing is more senseless than possessiveness in the realm of ideas. If God speaks to a man, Man hears the word. Nothing can remain permanently "sealed."

	As this thirtieth sequence of five symbols ends, it is made clear to us, and particularly to the inherently proud Leo type, that all that takes form within the mind of a man belongs to all men. Communication and SHARING must always prevail over the will to glorify oneself by claiming sole possession of ideas and information.`
},
{
	sign: "Virgo",
	degree: "01",
	title: "IN A PORTRAIT, THE SIGNIFICANT FEATURES OF A MAN'S HEAD ARE ARTISTICALLY EMPHASIZED.",
	keynote: `KEYNOTE: The capacity to picture to oneself clearly the salient features and the overall meaning of any life situation.`,
	description: `During the two preceding Scenes the "feel" of energy at work has been the dominant feature of a consciousness still strongly ego-centered yet at times eagerly and devotionally reaching up to a realization of divine or cosmic order. Now we have come in the seasonal cycle of the year to the sign Virgo. It is in a sense the symbol of harvesting, but it is also that of the Path of discipleship, and of all strongly determined processes of training, or retraining. Flooded with and having enjoyed and released energy, the personalized consciousness now has to learn the lesson of significant form. It must be able to see life situations as wholes of experience, and to discover their meaning by distinguishing their most characteristic features.

	This is the first stage of the thirty-first five-fold sequence of symbols and its Keyword is DISCRIMINATION. Implied in discrimination is both analysis and intuition. The mind separates and identifies — and unfortunately often exaggerates — what makes a person or a situation different from another; but the intuitive responses of the whole person to what confronts him or her is also essential, for what matters is not only my or your "difference," but the place and function this difference occupies in the organic pattern of the evolution of "humanity as a whole," i.e. of Man.`
},
{
	sign: "Virgo",
	degree: "02",
	title: "A LARGE WHITE CROSS DOMINATES THE LANDSCAPE.",
	keynote: `KEYNOTE: The wisdom and compassion which only the experience of suffering and isolation can bring.`,
	description: `The individual must have gone beyond the state of ego-subjectivity in order truly and objectively to "see" and to discriminate. He must have learned detachment; and it is a lesson that no one can learn without the "crucifixion" of the ego-centered emotional life. In the occult tradition, the eye that "sees" must be washed by the blood of the heart. The experience of the Cross dominates the mystic Path that leads to Initiation, i.e. to the entrance into a greater realm of activity and participation with an exalted Company of perfected beings.

	While the discovery of significant features in any situation implied the use of the mind, both analytical and intuitive, now a contrasting stage is reached at which the mind itself has to be left behind and perhaps even seemingly destroyed in order that compassion and understanding may rise from the depth of the innermost being: a LIBERATING ORDEAL.`
},
{
	sign: "Virgo",
	degree: "03",
	title: "TWO GUARDIAN ANGELS.",
	keynote: `KEYNOTE: Invisible help and protection in times of crisis.`,
	description: `Though the consciousness may not yet be able to realize this as a fact, man is as surrounded by spirit as fish by water. Angels, devas and the like are entitized forms of spirit. In a sense at least, they collectively constitute a realm of existence complementary to mankind. They are specialized fields of energy which are apparently conscious, but not "free" in a human sense — that is, free to be what they are not. We are told, by seers and even by merely clairvoyant persons, that they constitute hierarchies of energy-distributing forms which sustain all life processes — particularly in the vegetable and telluric realms — as well as protective agencies attached to human beings. Modern psychologists may think of them as symbols of as yet latent powers in man's unconscious. By being aware of their presence and sustaining power a man may avoid the desperate feeling of aloneness and alienation which usually pervades the "night of the soul" and the symbolic forty days in the wilderness.

	This third stage symbol comes to those who may greatly, need its reassurance. It is an answer to the symbol of the Crucifixion. The personal ego-centered feelings may be quartered and destroyed; in their place man may develop a sense of deep companionship with consciousnesses which, though utterly different from his, complement his assuaged mind. He may then realize STRENGTH WITHIN.`
},
{
	sign: "Virgo",
	degree: "04",
	title: "BLACK AND WHITE CHILDREN PLAY TOGETHER HAPPILY.",
	keynote: `KEYNOTE: The overcoming of socio-cultural prejudices.`,
	description: `Freedom from all the forms, biases and idiosyncrasies of the particular culture and class in which one has been born and educated is a sine qua non of the consciousness truly "on the Path." The ideal of universal brotherhood underlies all great spiritual teachings, for they all are like branches of the One Tree, Man, in his divine state. This does not mean there are no racial differences, but rather that these differences have a functional value in terms of the whole organism of Man — and of the planet Earth.

	At this fourth stage the basic technique which applies to all truly spiritual progress is clearly stated. Every human being should be seen, approached and warmly met as a "child of God," or in less religious terms as an exemplar of Man. Such a status gives to every social and interpersonal group the character of a BROTHERHOOD.`
},
{
	sign: "Virgo",
	degree: "05",
	title: "A MAN BECOMING AWARE OF NATURE SPIRITS AND NORMALLY UNSEEN SPIRITUAL AGENCIES.",
	keynote: `KEYNOTE: The opening of new levels of consciousness.`,
	description: `In the first of this sequence of five symbols we saw the individual seeking to bring out of everyday contacts a consciousness of significant form and meaning. Now, as the sequence ends, a further stage of realization is shown in its initial and relatively primitive character. The consciousness is gradually reaching beyond physical characteristics and becoming aware of energy processes, i.e. of the dynamism of forces which externalize themselves as life forms.

	This is the last stage of the thirty-first five-fold sequence of phases of the cyclic process of consciousness. The mind in its objectivizing and analytical character always tends to give "name and form" (nama and rupa in Sanskrit) to that which it contacts as energy process. It "images forth" energy or feeling, relating it to more or less familiar sense experience. We call this IMAGINATION.`
},
{
	sign: "Virgo",
	degree: "06",
	title: "A MERRY-GO-ROUND.",
	keynote: `KEYNOTE: The first experience of the dynamic intensity of life processes and of the possibility of using them to reach a characteristic ego-satisfaction.`,
	description: `Several features connected with the old-fashioned type of merry-go-round should be understood in their deepest symbolism. Two stages of experience are distinguishable: that in which a very young child is seated with his mother or nurse in an open carriage — the only experience is that of circular, perhaps at first dizzying, movement — and the stage of riding a horse (or some other animal) which often goes up and down as well as around. As the horse always represents the vital energy (later understood as libido or "psychic energy"), the merry-go-round at this stage symbolizes or prefigures the awareness of the cyclicity and the ups and downs of the emotional life. In the fully developed merry-go-round the child on his horse is given some kind of handle to try and catch a ring hanging within his reach at a fixed point just outside the merry-go-round. If he succeeds in this rather difficult operation the child wins a prize or gets a free ride. The symbolism is sexual in its implications, but more generally it implies that any cyclic release of life energy provides us with the opportunity of demonstrating some type of skill and mastery.

	This is the first stage of the thirty-second sequence of five symbols. In its broadest sense we see here a characterization of what the developing consciousness (and at a certain level, the "disciple on the Path") experiences: AN OBJECTIVE APPROACH TO THE LIFE FORCE.`
},
{
	sign: "Virgo",
	degree: "07",
	title: "A HAREM.",
	keynote: `KEYNOTE: A fateful (even if sought after) subservience to the vagaries or desires of the emotional nature.`,
	description: `In a sense this symbol is related to the preceding one, while revealing a deeply contrasting phase of the emotional and cultural life. The experience symbolized here is a passive one, while that for Virgo 6° was intensely dynamic. Yet there may be for the woman in the harem some sort of cyclic pattern and a prize to reach — the sultan's favor. In both cases the motive power is exterior to the experiencer, who is caught in a pattern of forces over which he or she has no control; yet the child may purposefully use his small allowance to get a ride, and the woman may use her charm to attract the attention of her master. The individual in both cases finds himself one with a number of other individuals all seeking or being subjected to the same type of experience or fate.

	This second stage symbol contrasts with, but also supplements, that of the first stage. It supplements it in the sense that one may become addicted to the excitement of the merry-go-round of vital emotions and may become a slave to the hope of recapturing the exultation of the initial experiences; yet one may learn how to put to use even the EMPTINESS OF WAITING.`
},
{
	sign: "Virgo",
	degree: "08",
	title: "A FIVE-YEAR-OLD CHILD TAKES A FIRST DANCING LESSON.",
	keynote: `KEYNOTE: Learning to use one's capacity for emotional self-expression according to cultural standards.`,
	description: `The process of emotional experiencing under controlled situations is shown now to demand self-induced, active movement; yet the movements are still conditioned, if not totally determined, by cultural and thus collective patterns. The individual can express his own individual character only according to traditional modes. He is still entirely responsible to his teacher or guru. Yet new perspectives are now open to him.

	At this third stage of the five-fold thirty-second sequence of symbols we witness at work the transitional phase which may lead to mastery. The child-consciousness is still dominated by some form of authority; but if the child is "five years old," the implication is that he is entering ' the level of conscious manhood, represented by the number 5, the five-pointed star which outlines at least the POTENTIALITY OF INITIATION.`
},
{
	sign: "Virgo",
	degree: "09",
	title: "AN EXPRESSIONIST PAINTER AT WORK.",
	keynote: `KEYNOTE: The urge to express one's individualized sense of value regardless of tradition.`,
	description: `At this stage the individual is seen reacting against cultural standards and stereotyped ways of interpreting his perceptions. This is a statement of uncompromising self-reliance, which may even imply a kind of defiance and a challenge to society. The mind is seeking to discover the character of the basic and true foundation of individual selfhood, the AUM tone (or logos) of individual being. In the process, however, what is expressed is usually the reflection of a deep catharsis with emotionally charged and often tragic overtones.

	This fourth stage symbol brings to us the hint of a technique of transformation of the personality. What predominates is a sense of inner conflict and an over-selfconscious attempt at "being oneself." But there is a great difference between being an origin of development pregnant with futurity, and deliberately sought for ORIGINALITY.`
},
{
	sign: "Virgo",
	degree: "10",
	title: "TWO HEADS LOOKING OUT AND BEYOND THE SHADOWS.",
	keynote: `KEYNOTE: The growth of true understanding, born out of the transcendence of duality even while immersed in the world of duality.`,
	description: `The mind operates inevitably in this world of conflicts, oppositions and duality. Yet when the opposites realize that they are complementary aspects of the one Reality which sustains and encompasses all dualistic modes of existence, they are able then to look away from internal conflicts and beyond the shadows these conflicts generate. They may come to realize the One Consciousness-Force, not in Itself (for this is, if not an impossible, at least an inexpressible experience), but as the Creative Unity, the New God, Ishvara, source of a new cycle of manifestation.

	This is the last stage of the thirty-second sequence; it leads us to the new sequence, which deals with the characteristic features of the steadily progressing consciousness in the most critical part along its arduous Path toward transformation. In a deep philosophical sense we witness here the mind attempting to jump beyond the very shadow it inevitably casts upon all experiences; i.e. the SELF-TRANSCENDING ACTIVITY OF THE MIND.`
},
{
	sign: "Virgo",
	degree: "11",
	title: "IN HER BABY A MOTHER SEES HER DEEP LONGING FOR A SON ANSWERED.",
	keynote: `KEYNOTE: The Spirit's answer to the vital needs of whatever became individualized out of its infinite ocean of potentialities.`,
	description: `All cycles of manifestation end in an essential duality of "success" and "failure," as every release of new potentiality at the start of a cycle is inevitably polarized in two opposite directions, becoming sharply differentiated at the mystical "separation of the sheep and the goat." But out of duality a new unity eventually is produced: the child, the new God of a new universe. Subconsciously or consciously, during pregnancy, the mother dreams of the son-to-be and the imprint of the dream in time is revealed in the boy's structural being. The true disciple must become the Mother of the living God and should eventually fulfill the great need of humanity and of all his people. MAN is constantly renewed through the great dreams and sacramental pregnancies of all disciples of the One Master.

	This is the first stage of the thirty-third five-fold sequence of phases of the cycle. At this stage the power to bring one's dreams and ideals to a clear and sharp focus of mental activity or imagination needs to be developed. It is the power of creative visualization (Kriyashakti) for which a significant word was coined during World War II: IMAGINEERING — a combination of "imagination" and "engineering." Alas, the word was there, but our statesmen failed to incarnate it in deeds.`
},
{
	sign: "Virgo",
	degree: "12",
	title: "AFTER THE WEDDING, THE GROOM SNATCHES THE VEIL AWAY FROM HIS BRIDE.",
	keynote: `KEYNOTE: The penetrating and unveiling power of the trained mind.`,
	description: `In contrast to the preceding symbol we have now a scene stressing a physical action with psychological and/or spiritual overtones. In ancient cosmologies the male god often appears in three roles as son, husband and father of the woman element of nature. Nature is fulfilled by the human mind and will that overcome her; she resists only better to be subdued by the power that transcends her, and by transcending her gives her a spiritual meaning. The element of "training" in the symbolic scene comes from the fact that there has been a marriage ritual; thus the sociocultural factor is in the background. The teacher-guru is here the priest who has performed the ritual.

	At this second stage the rules are reversed, the masculine element assuming the dynamic positive part in the great play of polarity. The masculine act balances the feminine dream visualization. The Keyword is UNVEILING. There can also be an unveiling of mysteries, long protected by secrecy.`
},
{
	sign: "Virgo",
	degree: "13",
	title: "A POWERFUL STATESMAN OVER-COMES A STATE OF POLITICAL HYSTERIA.",
	keynote: `KEYNOTE: The focusing of the collective need for order and structural interdependence into a personage who incarnates the answer to this need.`,
	description: `The husband role of fecundator of nature here takes on a collective social significance. We are at the stage where a powerful realization of the very purpose of the cycle of existence faces the chaotic remains of a dis-structured past. The character of the leader is always delineated by the need, subconscious though it may be, of the unformed agglomeration of entities he is called upon by destiny to lead. In time the leader will be worshiped as the "divine Father" of the society he structured.

	At this third stage of the thirty-third sequence we see a new type of characterization of the many-faceted polarization of positive and negative. We have before us a personage endowed with CHARISMA, this elusive and mysterious power that comes from a man's or woman's openness to the power of planetary evolution.`
},
{
	sign: "Virgo",
	degree: "14",
	title: "AN ARISTOCRATIC FAMILY TREE.",
	keynote: `KEYNOTE: A deep reliance upon the ancestral roots of individual character.`,
	description: `Stressed here is the fact that the power available to any man in time of crisis and decision has very deep roots in the past, whether the past of physical ancestry or the past outlined by a series of previous embodiments conditioned by some dominant purpose and by the many-phased development of a particular type of complex character. True spontaneity and creativity are always based on a structured sequence of antecedents if they are at all genuinely spiritual, i.e. if they are able to meet a collective need. Only the actions that are necessary — even if only in the long run — for meeting such a need can actually be called "spiritual."

	This fourth stage symbol, strange as it may seem to many people — especially young people of our day — suggests a technique which, at critical times, must be used. It characterizes the means for true "success." One returns to the roots in order to produce the flowering of personality, if this flower is to bring forth a living seed. ROOT POWER is essential to seed-achievement.`
},
{
	sign: "Virgo",
	degree: "15",
	title: "A FINE LACE HANDKERCHIEF, HEIRLOOM FROM VALOROUS ANCESTORS.",
	keynote: `KEYNOTE: The quintessence of deeds well done.`,
	description: `Root strength produces beautiful flowers. The neophyte who acts with determination, courage and discrimination while following "in the footsteps" of his predecessors receives a symbolic prize from the Brotherhood ready to welcome him when he has fully proven himself on the battlefield where he meets his past, which tries to block his way. The mystic Beloved hands him what she has woven for him out of spiritual threads.

	This is the last stage of the thirty-third sequence which also ends the eleventh scene, "Characterization." This scene began with the revelation in a portrait of salient features in a man's face. It ends with symbols which bring out the ultimate validity of the many efforts of generations of men toward the building of a beautiful and significant CULTURE. The Man of Culture is, in the deepest and best sense of the term, the Aristocrat. He is the flowering of a line of ancestors who have accepted responsibility for a group or community. Likewise, the true "disciple" is the blossom that crowns a long series of incarnations.`
},
{
	sign: "Virgo",
	degree: "16",
	title: "IN THE ZOO, CHILDREN ARE BROUGHT FACE TO FACE WITH AN ORANG-UTANG.",
	keynote: `KEYNOTE: A direct confrontation with the "wild" power of primordial nature within oneself.`,
	description: `During this twelfth subcycle closing the first half of the cycle we deal with phases of unfoldment which can be very broadly classified under the term "e-ducation," i.e. a leading out into the world of transcendent activity. Every hidden motive and depth energy has to be "led out" and objectively faced. According to the occult tradition, at least some of the ape species are actually throwbacks resulting from the perversion of the Man archetype when it belatedly came in touch with the elemental energies of an adolescent Earth. Likewise many of the so-called "primitive" tribes in places like Australia and New Guinea should be considered degenerate remnants of races which once had reached a much higher level of culture. In other words, the symbol refers to the confrontation of future-oriented modern children with the results of what one might refer to as an "original sin" — that is, with the degeneration of enormous vitalistic power once available to the human being. That power is now directed toward the mind, and has been immensely magnified by modern, technology. Yet there are residual remains of this vitalistic power in modern man's nature, and we may well repeat at a higher level the "sin of the mindless." The candidate for Initiation must face this possibility; the whole of mankind, in a sense, is a candidate for a planetary Initiation.

	This is the first stage of the thirty-fourth sequence of symbols. Its symbol speaks of KARMIC CONFRONTATION.`
},
{
	sign: "Virgo",
	degree: "17",
	title: "A VOLCANIC ERUPTION.",
	keynote: `KEYNOTE: The explosive energy of long-repressed contents of the subconscious.`,
	description: `We are dealing here with the dramatic release of energies which have been kept in check by the outer shell of the ego controlled consciousness. It may be a spectacular catharsis, but it often takes paths of destruction. Yet unless some form of purification by fire is experienced, the inner pressure of the karmic past or of more recent frustrations would shake up perhaps even more destructively the very foundations of the personality.

	At this second stage, the objective confrontation with an image of the karmic past is replaced by a subjective irruption of repressed memories and primitive cravings. Everything must be released from the psyche seeking to attain the transfigured state. The soul must become empty, the mind translucent. The Keyword is EXPLOSION.`
},
{
	sign: "Virgo",
	degree: "18",
	title: "A OUIJA BOARD.",
	keynote: `KEYNOTE: The ability to contact deeper recesses of the unconscious psyche and sensitiveness to psychic intimations and omens.`,
	description: `The ouija board is to be considered here a modern device similar to many ancient instruments used for divination and prophecy. Certain states of threshold consciousness are stimulated by such a use, and what the experience produces may vary greatly in quality and in origin. The release of unconscious material has lost the explosive force pictorialized in the preceding symbol, yet at this stage there is still no conscious and willful control over what reaches the ego-consciousness.

	This is the third stage of the thirty-fourth sequence of symbolic phases in the life process. It is at best a stage of transition which stresses a passive openness to the unknown. The glamour of it may subtly pervert the mind of the aspirant; but in some cases, this can be the first manifestation of INNER GUIDANCE. The difficulty is to correctly evaluate what or who does the guiding.`
},
{
	sign: "Virgo",
	degree: "19",
	title: "A SWIMMING RACE.",
	keynote: `KEYNOTE: The stimulation that comes from a group effort toward a spiritual goal.`,
	description: `When man has become an expert swimmer he has symbolically learned how to operate in a new element. This element, water, represents the ever-flowing stream of psychic energy, and, in a sense at least, the "astral" world. In a still deeper sense man is now able, mystically speaking, to cross the river and reach "the other shore" — or to swim back toward the source. Whether or not the symbol should suggest the competitive spirit at work is questionable. At the biological level a host of spermatozoa are swimming toward the ovum, and each presses on toward the goal, the act of impregnation. A seeker after spiritual rebirth actually does not strive alone. It is Man who, acting through the most advanced individuals of the race, is taking a step toward "rebirth," or toward a new mutation. The personal ego-centered ambition to succeed and to be "first" is indeed a sign of expectable spiritual failure.

	At this fourth stage we are confronted with a problem of interpretation. Is not ambition a subtle form of deviation under the pressure of ancient karma, and the competitive spirit so valued by our civilization a sign of failure to understand the deeper reality of existence? What is needed is EMULATION, not competition.`
},
{
	sign: "Virgo",
	degree: "20",
	title: "A CARAVAN OF CARS HEADED TO THE WEST COAST.",
	keynote: `KEYNOTE: The need of cooperative effort in reaching any "New World" of experience.`,
	description: `It is difficult to know, from the original formulation of the clairvoyant's vision, the type of caravan of cars that was visualized; what seems to be clearly implied is a process in which a group of persons are journeying together — thus linking their consciousnesses and energies (the "car" symbol) — in order to safely reach the goal of destiny. Here there is no longer any sense of competition, but an ordered and structured endeavor.

	At this last stage of the five-fold sequence the past is entirely left behind; men cooperate in the great "adventure in consciousness" in a TOTALIZATION OF PURPOSE AND EFFORT.`
},
{
	sign: "Virgo",
	degree: "21",
	title: "A GIRL'S BASKETBALL TEAM.",
	keynote: `KEYNOTE: Physical training as a means to inculcate the feeling of participation in a collective culture.`,
	description: `Basketball presents an interesting symbol. The ball must be thrown into a narrow opening high above the head of the player. The ego-consciousness (the ball) must be driven upward to a focal point or circle that is ready to receive it. In a sense, this parallels what the boy on the merry-go-round (Virgo 6°) can do if he succeeds in penetrating the ring with his stick, but there are notable differences. Here the players operate as a team; in the original formulation of the symbol there was no reference to two teams and thus to the competitive character of the game. What should be stressed here is the formation of a group acting as an organic whole and training itself to operate in a social context.

	This is the first stage of a second-level sequence of five symbols, as was the symbol of the merry-go-round. A definite type of educational activity is implied with cultural, and as well emotional, overtones. It implies the training for GROUP INTEGRATION of "girls," i.e. of a type of consciousness more specifically receptive to collective forces.`
},
{
	sign: "Virgo",
	degree: "22",
	title: "A ROYAL COAT OF ARMS ENRICHED WITH PRECIOUS STONES.",
	keynote: `KEYNOTE: The certification of aristocratic status, at whatever level "nobility" expresses itself in cultural eminence.`,
	description: `Once more a reference to ancestral achievements occurs among these symbols for the sign Virgo. It is seen here in its most exalted character, for "royalty" is spoken of. Traditionally the king is the spiritual symbol of unity of an integrated nation; as a coat of arms is visualized, we are dealing with a status that is not merely personally acquired but has its roots in a notable past. Every great Adept has come out of a line of human beings who have made their marks upon human evolution. Spiritual attainment is the result of a series of long, repeated efforts; it is the end of a "royal road," (raja yoga) in the broadest sense of the term, raja, meaning king.

	This second stage symbol contrasts with that of the first in that it refers to heredity rather than to the training of youthful raw material. Gautama the Buddha was known occultly as "He who comes after his predecessors." The coat of arms represents the collective status, the Spiritual Office. Whoever wears it assumes the responsibility of an Office. As the French say, "Noblesse oblige." NOBILITY confers upon a man exacting responsibility. The question implied in the symbol is, Are you willing, able and ready to assume a "royal" office, at whatever level it may be?`
},
{
	sign: "Virgo",
	degree: "23",
	title: "A LION TAMER DISPLAYS HIS SKILL AND CHARACTER.",
	keynote: `KEYNOTE: The need to tame one's vital energies in order to fulfill one's destiny.`,
	description: `We see here the development of the concept of training. The true aristocrat is the individual who is in complete control of his vital and emotional energies; at the spiritual level this includes the overcoming of pride — pride in one's strength and mastery, and the pride attached to an exalted status or social Office.

	This is the third stage of the thirty-fifth sequence of five symbols. The meaning of this phase of development is traditional and evident. The whole process of social-ethical and occult-spiritual conditioning of the individual aims at the control of man's "animal nature." The energies of this nature can be put to many uses. Implied in any successful process of taming and training is RESOLUTENESS and PATIENCE.`
},
{
	sign: "Virgo",
	degree: "24",
	title: "MARY AND HER LITTLE LAMB.",
	keynote: `KEYNOTE: The need to keep a vibrant and pure simplicity at the core of one's being as one meets the many tests of existence.`,
	description: `Coming after the preceding symbols this one tells us that, though great, spectacular and resolute efforts are needed in order to achieve one's higher goals of destiny, still the essential quality as one journeys on "the Path" is a pure, spontaneous, fresh and nonviolent approach to all encounters. This of course is Jesus' entreaty to his disciples — that they should be like "little children." Without such a deep, heartfelt simplicity the seeker after spiritual experiences or Initiation is bound to find himself glamorized by his own successes, and to see his ego feeding on the drama of struggle and victory.

	This is the fourth stage of the thirty-fifth five-fold sequence and it presents us with a subtle hint of technique. Beyond individual prowess and social eminence, the individual whose innocence is fixed upon spiritual realization should genuinely radiate INNOCENCE.`
},
{
	sign: "Virgo",
	degree: "25",
	title: "A FLAG AT HALF-MAST IN FRONT OF A PUBLIC BUILDING.",
	keynote: `KEYNOTE: The social acknowledgment of a job well done and a destiny fulfilled.`,
	description: `As an individual who has accepted any significantly met public responsibilities reaches the end of his service to his community or to mankind as a whole, he gains social immortality, at least to some extent. In death he becomes identified with the archetype that ensouled his public office. He becomes a "culture hero," enshrined in the official memory of his race. He has found his place in history. The symbol implies the ability to carry any task to its ultimate fulfillment, provided this task is carried out with reference to the need of a collectivity, small or large as it may be.

	In this final phase of the thirty-fifth five-fold sequence of symbols we are presented with an image of the end results of the individual's service to mankind. His personal failings may be forgotten but his achievements remain. They are given PUBLIC RECOGNITION.`
},
{
	sign: "Virgo",
	degree: "26",
	title: "A BOY WITH A CENSER SERVES THE PRIEST NEAR THE ALTAR.",
	keynote: `KEYNOTE: The first stage of actual participation in the great ritual of planetary evolution.`,
	description: `Whether we think of the ancient mysteries, or of a Catholic Mass, or of some still more transcendent ceremony in which great Beings charged with planetary responsibilities are involved, we are dealing with a type of archetypal activity. The ritual is archetypal in that it represents, in however small a field of activity, a portion of the evolving structure of the cosmos, as this structure is understood in its "sacred" sense. Every such activity is performed "in the presence of God." Menial as it may be, it nevertheless acquires a sacred meaning.

	This is the first stage of the thirty-sixth five-fold sequence, which brings us to the close of the first half of the cycle. The individual is "e-ducated," i.e. led out into the world of transcendent activity, the world of archetypal performance. He must learn to serve, humbly and with intense attention, in what as yet is beyond his spiritual understanding. He learns to perform every action super-personally. He learns to PRACTICE IN THE PRESENCE OF GOD.`
},
{
	sign: "Virgo",
	degree: "27",
	title: "A GROUP OF ARISTOCRATIC LADIES MEET CEREMONIALLY AT A COURT'S FUNCTION.",
	keynote: `KEYNOTE: The ability to carry on a revered tradition in order to perpetuate cultural standards of excellence.`,
	description: `At the highest peak of achievement of any fully developed culture the King considers himself in some manner a representative of the Power that controls the order of the universe. From him descends a hierarchy of offices performed by an aristocracy. On the feminine side, to be an aristocrat is to be able to act efficiently in the many rituals of a culture — from official tea parties to presentations at the Court. Dignity, elegance and respect for formal rules are essential.

	We may consider the formalism obsolete and meaningless, yet when it ceases to be observed the culture breaks down. Even now in this age of crisis and world transformation, there may be times when honoring formal procedures can be of great value for the disordered and rebellious mind.
	
	This second stage symbol presents the contrast between the "profane" and the "sacred" ritual. But the two need not be antithetic. Our over-individualistic and confused new generations find it valuable to study Japanese tea ceremonies, flower arrangement, judo, etc. The undisciplined need to learn REFINEMENT.`
},
{
	sign: "Virgo",
	degree: "28",
	title: "A BALDHEADED MAN WHO HAS SEIZED POWER.",
	keynote: `KEYNOTE: The sheer power of personality in times that call for decision.`,
	description: `Whether at the religious or at the socio-political and cultural level there comes a time when obsolescent patterns of order and cultural refinement have to be radically and relentlessly challenged. Catabolic personages emerge to seize power and dictate decisions that alter the structures of society; or within an individual life, an intense urge for cathartic changes mobilizes the will, and traumatic decisions are made. At such times, the issue has to be met and, ruthless as the power may appear, it must be accepted.

	At this third stage of the thirty-sixth sequence we face the un-postponable necessity for decision and transformation. Existence is motion. No static formation, however beautiful and inspiring, can remain long unchallenged. Everything bows to THE POWER OF THE WILL — divine, executively human, or Satanic.`
},
{
	sign: "Virgo",
	degree: "29",
	title: " A SEEKER AFTER OCCULT KNOWLEDGE IS READING AN ANCIENT SCROLL WHICH ILLUMINES HIS MIND.",
	keynote: `KEYNOTE: After a crisis one should seek to realign the renewed consciousness with the primordial Revelation of the Truth of Man.`,
	description: `Any revolutionary movement, once it has succeeded in over- coming the inertia of the past and in toppling obsolete structures, needs to tap the most essential realities of what Man represents and signifies in the universal Order; or else it merely re-embodies in a superficially altered manner the very things it has destroyed. This is the crucial moment. In occultism the "Pattern of Man" is an archetypal Power that may be contacted. It must be sought with undeviating determination. After each revolutionary crisis this Pattern and this Power can be contacted — always the same, yet at each new cycle perceivable in a different light.

	This fourth stage symbol presents us with the technique required to "reach the other shore." But each individual, and each group or racial unit, must come in its own way to the ROOT KNOWLEDGE which provides the only safe foundation for rebirth.`
},
{
	sign: "Virgo",
	degree: "30",
	title: "TOTALLY INTENT UPON COMPLETING AN IMMEDIATE TASK, A MAN IS DEAF TO ANY ALLUREMENT.",
	keynote: `KEYNOTE: The total concentration required for reaching any spiritual goal.`,
	description: `This is the final symbol of the first half of the cycle. In the year cycle the fall equinox is now at hand; autumn begins. Through spring and summer many ways and byways have been experienced. The last message of this hemicycle of "Individualization" is that on all decisive occasions what must be done has to be done so intently that no outer voices can penetrate the mind, still less the soul. The neophyte stands at the gates of the sacred Pyramid. There is only one step he can take — ahead, or he is lost.

	This is the culminating step, the decision that results from a myriad of small choices. Still a shadow of hesitation can remain. Attention may be distracted from the Now by a voice from the past, glamorizing some old memory. The outer doors of perception and thought must be closed, so the soul can complete its CONQUEST OF ILLUSION.`
},
{
	sign: "Libra",
	degree: "01",
	title: "IN A COLLECTION OF PERFECT SPECIMENS OF MANY BIOLOGICAL FORMS, A BUTTERFLY DISPLAYS THE BEAUTY OF ITS WINGS, ITS BODY IMPALED BY A FINE DART.",
	keynote: `KEYNOTE: The immortal archetypal reality that a perfect and dedicated life reveals.`,
	description: `Just as the symbol for Aries 1° evoked the keynote of the entire first half of the cycle, i.e. differentiation out of the undifferentiated "Ocean of potentiality," this symbol for Libra 1° reveals to the intuitive consciousness the essential character of the second hemicycle. In the yearly cycle we have reached the fall equinox, the symbolic time -of bringing in the harvest in preparation for winter. It is the time consecrated to the seed, just as the spring equinox is consecrated to the germ, the new rise of life which in-forms the growth of individual organisms.

	At this autumnal point, the drive toward individualization and self-assertion has lost much of its momentum, while a new trend is successfully and dynamically challenging its hegemony — the trend toward the formation of collectivities of individuals. But this new trend can be misunderstood if seen only superficially as the mere gathering together of individual persons. The process has a much deeper meaning, and indeed an inner source of power, for what is at stake is not merely an aggregation of separate units (simple or already complex, as in the case of "families"). At the core of this "coming together," the "descent" or externalization of archetypal realities is gradually occurring. At the Libra stage, these archetypal realities are "Forms"; at the Scorpio stage they will be "Powers." The symbol for this degree of the fall equinox thus describes a "perfect form" — the result of the metamorphosis of "worm" into butterfly, a process the symbolism of which has so often been used to indicate to man the possibility of his being transformed into "more-than-man," the transhuman being, the true Initiate, the Adept, the Perfect. The perfect butterfly is impaled by a fine dart; the symbol of "dart of wisdom" was used in Marc Jones's mimeographed course, while the original notation of what the clairvoyant had seen indicated "a butterfly made perfect by a dart through it," suggesting a process of perfection through sacrifice.
	
	As I see it, the dart can hardly be said to have made the butterfly perfect, but it keeps it perfect by killing the living organism. The impaled butterfly is preserved by the dart which "fixes" it in perfection for a whole cycle, i.e. it makes an archetype of it. By thus escaping the normal process of dying and decay, the butterfly form (the "perfection") is kept. It is kept in the mystical Shamballah, where it is said that the Pattern of Man is kept, just as the perfect bar measuring exactly one meter is (or was) kept in a crypt in Paris, where the metric system was originally devised.
	
	The perfect butterfly thus represents the outcome of the process of occult discipleship symbolized by the sign Virgo. From then on, a new process begins, that of collectivization; at the very core of that new process the perfect Form of Man must remain as a standard of value if this process is to be valid and meaningful.
	
	This is the first statement in the thirteenth scene of the great ritual drama. It is an actional phase because in it the perfection of individual activity is revealed and immortalized. This is the symbolical Transfiguration; at the Mount of Transfiguration, Jesus, the Son of Man, was "impaled" by the ray of Divine Light, making of him a Son of God. It was at this very moment that he learned of the Crucifixion awaiting him. Thus the merely human individual is MADE SACRED, becoming the pure embodiment of an archetype.`
},
{
	sign: "Libra",
	degree: "02",
	title: "THE TRANSMUTATION OF THE FRUITS OF PAST EXPERIENCES INTO THE SEED-REALIZATIONS OF THE FOREVER CREATIVE SPIRIT.",
	keynote: `KEYNOTE: A repolarization of inner energies leading to a creative centralization of consciousness.`,
	description: `The original formulation of this symbol was both "occult" and, I believe, confusing; "The light of the sixth Race transmuted to the seventh." It could be interpreted in terms of the process of mankind's development through the seven great Races (or evolutionary periods) outlined in the second volume of H. P. Blavatsky's Secret Doctrine, but there are no other symbols in the series having such a frame of reference. What seems more likely to be implied in the revealed image is a reference to the numerological and occult meaning of Number 6 and Number 7, especially geometrically expressed in the diagram (on page 32) in which seven circles, contiguous and of the same size, fill a larger circle whose diameter is three times that of the smaller one. The six circles touching the circumference of the larger one represent the six basic approaches to Truth and Reality possible to man's developing intelligence — thus the well-known Six Schools of Hindu philosophy, and at the level of energy the six fundamental colors, or "Rays." But central to this six-fold system is the hidden or occult "Seventh," the Atma Vidya of Hinduism, the unformulatable Truth of the Self which both includes and transcends the six approaches. Schools or Rays.

	Number 6 (also Solomon's Seal) represents the synthesis of descending spirit and ascending matter. It represents the fruition of all past efforts; within the six-fold fruition the seed may be found, the seventh. Outer activity is fulfilled (the Six Days of Creation in the first chapter of Genesis); and the Supreme Actor can be seen in His changelessness and therefore his transcending all-inclusiveness.
	
	All that was manifested in the plant is gathered in the hidden seed, which in due time becomes the foundation of a new cycle of existence. The fruit decays. For a brief moment the released seed may be seen; this is the "seventh" period that becomes the creative power fathering a new cycle. This symbol for Libra 2° refers to the process of centralization in the Self (the creative Reality) after the experience of fulfillment in the perfect Form of manifestation.
	
	This is the second stage of the thirty-seventh five-fold sequence of symbols and phases. It refers to a dynamic process in contrast to the picture representing the first stage — a picture of maintained and immortalized, thus static, perfection of form. Formal perfection is now transcended through a process of CREATIVE CENTRALIZATION.`
},
{
	sign: "Libra",
	degree: "03",
	title: "THE DAWN OF A NEW DAY REVEALS EVERYTHING CHANGED.",
	keynote: `KEYNOTE: The ever-present possibility of beginning again on a new foundation of values.`,
	description: `This symbol hardly needs to be interpreted, except for pointing out that these first three symbols beginning the second hemicycle of the cyclic process should be seen as a basic trinity. It can be related to the process of true Initiation: (1) The experience of the undying Form of perfection; (2) The release of the energy incorporated in the Form in order to reach "That-which-is-beyond-form-and-name"; (3) The re-embodiment of energy in a new creative Act.

	The third stage of this thirty-seventh sequence leads us to a vision of the fulfilled purpose of the first half of the cycle. What emerged hesitantly from the ocean of infinite potentiality (Aries 1°) now faces a totally new world in a truly individualized form of existence. He or she is ready to act significantly in the sphere of culture and social togetherness, the sphere in which an individual, aware of his archetypal essence and planetary function, can play his true role (dharma). In a basic sense it is always a new role, for no cycle repeats itself as far as its contents are concerned. The person who plays this role is always potentially an INNOVATOR.`
},
{
	sign: "Libra",
	degree: "04",
	title: "AROUND A CAMPFIRE A GROUP OF YOUNG PEOPLE SIT IN SPIRITUAL COMMUNION.",
	keynote: `KEYNOTE: The necessity to unite with kindred spirits as one enters unbeaten paths illumined by the still-insecure light of a dawning intuition of new values.`,
	description: `As one partially visionary leader said a few years ago: "Beaten paths are for beaten men." The urge to create a new society and respond to new values leads the pioneer to the wilds, which represent the state of planetary possibility — i.e. the as-yet-uncultured, the virgin forest. Around the fire of a common dedication (or at least a common hope!) minds and bodies can commune, forming a "chalice" or Grail for the reception of creative inspiration.

	At this fourth stage of this five-fold sequence of phases of development we find, as usual, a hint of technique. If a new society is to be built, those who yearn for it, or perhaps who have envisioned its outlines, should commune. But communion is useless where no central "fire" burns, IN-SPIRITING the group.`
},
{
	sign: "Libra",
	degree: "05",
	title: `A MAN REVEALING TO HIS STUDENTS THE FOUNDATION OF AN INNER KNOWLEDGE UPON WHICH A "NEW WORLD" COULD BE BUILT.`,
	keynote: `KEYNOTE: The necessity for the youthful spirits to learn from a Teacher who through his long experience has been able to reach solid and illuminating truths, i.e. "seed ideas."`,
	description: `An old saying is just as valid today as ever: When the pupil is ready, the Master appears. But he may appear in many disguises. What matters is not the Master, but the Mastery he "re-veals." It is veiled in his person. It has to be contacted through his person, rather than in his person. Devotion to a guru may be the way, but sooner or later it should be transmuted into reverence: the truth within the disciple saluting in true humility the truth in the Teacher.

	This is the last stage of the thirty-seventh five-fold sequence and it marks the culmination of the four preceding stages. What is evoked by the symbol is the essential, withal rather mysterious, process of TRANSMISSION. What is transmitted, if the situation is really adequate and understood (at least tentatively) by all participants, is not merely knowledge. It is actually "being-ness."`
},
{
	sign: "Libra",
	degree: "06",
	title: "A MAN WATCHES HIS IDEALS TAKING A CONCRETE FORM BEFORE HIS INNER VISION.",
	keynote: `KEYNOTE: The need to visualize clearly one's dreams or ideals in order to make them truly effectual.`,
	description: `According to a French proverb, "What is well conceived can easily be formulated." The process of interior visualization can be quite essential, except in the case of a creative individual who has become a totally pure channel for the descent of spiritual Power, and a clear lens through which the Archetype in the Mind of Man (or God) can be projected without distortion wherever needed. In other cases the creative act is less direct: a man projects into the world what he has "seen" reflected on the screen of his individualized consciousness.

	This is the first stage of the thirty-eighth five-fold sequence of symbolized phases in the process of individualized existence. It is a phase of INTERIOR FORMULATION in preparation for a creative projection of one's ideals or concepts.`
},
{
	sign: "Libra",
	degree: "07",
	title: "A WOMAN FEEDING CHICKENS AND PROTECTING THEM FROM THE HAWKS.",
	keynote: `KEYNOTE: The need to face the antagonism of "powers of darkness" as one attempts to feed the mind of as yet helpless and frightened apprentices.`,
	description: `The most basic "Law" of our universe is that every release of new potentialities (or modes of energy) brings about a polarization of effects — that is, the new potentiality will be used both for construction and destruction. It will arouse individuals (or groups and nations) to take a series of steps which will lead some to greater success, others to deeper failure. Whoever makes possible this new release has to accept the karma of both the success and the failure. When Jesus showered his immense love upon lukewarm, self-centered individuals, it inevitably came to be turned into violent hatred when these soul-minds were unable to cope with its frightening intensity. Jesus had to accept spiritual responsibility for those who crucified him.

	At this second stage we witness the contrast between the ideal situation envisioned clearly by the creative consciousness (first stage) and what it will be in actual operation; thus the forever-present struggle involved in making it possible for the future-oriented actualizers of an ideal to survive the attacks of tradition-worshiping minds that can only follow the lines of automatic response. The keynote is GUARDIANSHIP.`
},
{
	sign: "Libra",
	degree: "08",
	title: "A BLAZING FIREPLACE IN A DESERTED HOME.",
	keynote: `KEYNOTE: The need to realize that even through the most empty hours a spiritual power is ever ready to welcome and warm up the wayward consciousness returning to center.`,
	description: `Until the fire of the Soul within the human psyche totally dies out — a rare and tragic occurrence — there's always hope of recovery and rebeginning. Many disciples find themselves compelled to abandon their spiritual quest, even after having had sense of essential being. Yet "the home" that once received them — the guru's love — remains ready to welcome the return of the "prodigal sons."

	This is the third stage in the thirty-eighth sequence of five symbols. In a sense it links the vision, catalyzed by the contact with an inspirer, with the possible reaction of fear or shock that arises from such a contact. Within the abandoned great dream, some intangible and warm "presence" remains: the ever renascent HOPE for a rebeginning.`
},
{
	sign: "Libra",
	degree: "09",
	title: `THREE "OLD MASTERS" HANGING ON THE WALL OF A SPECIAL ROOM IN AN ART GALLERY.`,
	keynote: `KEYNOTE: The need to return to source during a confused search for new value in a chaotic society.`,
	description: `There are always moments which focus in our minds the longing to re-ground ourselves in the great achievements of the past. The number 3 suggests completeness; esoteric traditions speak of the three-fold Soul, or of three fundamental "Rays" — of Power, of Love-Wisdom, and of Intelligence-in-action. Meditation, in its deepest sense, is a return to Source — an attempt to re-identify oneself with one's archetypal essence of being, which is triune in manifestation, and now) after confused but challenging wanderings, to identify oneself consciously with this "essence." The finer forms of one's culture provide the means to do this. The great moments of the collective past become an inspiration for new, yet sound, beginnings. The seed of tomorrow salutes the seed of yesteryear.

	At this fourth stage of the thirty-eighth sequence it is suggested that in the process of "Transfiguration" the presence of the greatest moments of the past is called upon, as Moses and Elijah were invoked in Jesus' Transfiguration. The seed of the new day depends upon the seed of yesteryear for an experience of the cyclic continuity of spirit. This is the basis for the institutionalized ideal of APOSTOLIC SUCCESSION, the guruampara (an uninterrupted chain of gurus) of Indian tradition.`
},
{
	sign: "Libra",
	degree: "10",
	title: "HAVING PASSED SAFELY THROUGH NARROW RAPIDS, A CANOE REACHES CALM WATERS.",
	keynote: `KEYNOTE: The self-control and poise necessary to reach a steady state of inner stability.`,
	description: `This symbol hardly needs to be commented upon. It could be related to the fifth symbol of the preceding five-fold sequence referring to guru-chela relationship at the actional level. Here we are dealing essentially with the emotional life and its crises. At the next — mental and individual — level, the concluding symbol will suggest the perfect and smooth working of the intellect ruled by logic and simplicity of means.

	This is the fifth stage of the thirty-eighth sequence; it concludes what was begun at the first stage. The inner "revelation" which brought about dramatic confrontations can now be meditated upon as it is reflected on the calm waters of the mind. As a Keyword one may use the term RELIEF.`
},
{
	sign: "Libra",
	degree: "11",
	title: "A PROFESSOR PEERING OVER HIS GLASSES AT HIS STUDENTS.",
	keynote: `KEYNOTE: Problems attending the transmission of knowledge in a special cultural setup.`,
	description: `This is a rather peculiar symbol for this phase of the process, and it reveals a rather humorous approach to what man's mind can accomplish at this stage. However, there seems to be no valid reason to make the image into some kind of a caricature, or to sentimentalize it by referring to a "kind old professor." Rather one should analyze the picture in order to discover its basic elements. The professor has dealt so much with books that he has greatly strained his eyes; in days when bifocal lenses were not widely used, he had to peer over his glasses in order to see his students. The symbol thus simply reveals two aspects of the condition of "professor-ship" — that is, of being able to transfer to the young generation the vast sum of knowledge accumulated by the past. The need to absorb this enormous amount of book knowledge affects the mind as well as the eyes; in order to meet the demands of the turbulent youth, the teacher in a sense has to look above this knowledge and to see his students simply as human beings.

	This is the first symbol in the thirty-ninth five-fold sequence. It deals at the intellectual level with the teaching of accumulated collective knowledge, and the problem posed by the acquisition of that knowledge. This is what INSTRUCTION means — a process not to be confused with "education."`
},
{
	sign: "Libra",
	degree: "12",
	title: "MINERS ARE SURFACING FROM A DEEP COAL MINE.",
	keynote: `KEYNOTE: The need to carry on at ever-deeper levels the quest for knowledge which keeps burning the fires of the collective mind of a society.`,
	description: `The search for knowledge demands the dedication of many minds digging ever deeper into the realities of our earthly existence. It is a hard, often dark pursuit amidst great difficulties and the possibility of being spiritually asphyxiated by the constant intellectual effort and tension. When a person is confronted by this symbol it could be interpreted as showing the need for such an intellectual dedication but also as pointing to the advisability of emerging from it and leading a more natural life.

	This second stage symbol is related to the first in that in both we see conditions of existence dealing with work for the sake of the collectivity. The opposition between intellectual and manual work is evident; less so is the fact that both classes of workers experience definite physical consequences as a result of their occupation: the eyes of the professor, the lungs of the coal miner. The professor digs in the intellectual past of mankind to find what may warm up the mental processes of his students; the coal miner brings to the surface the ancient remains of what once was living substance. Keyword: EXTRACTION.`
},
{
	sign: "Libra",
	degree: "13",
	title: "CHILDREN BLOWING SOAP BUBBLES.",
	keynote: `KEYNOTE: The cultural fantasies through which young minds dream of perfect fulfillment.`,
	description: `This seems to refer to the use of the imagination and the value of fantasy in a collective setup. Men dream together as a preparation for acting together. Rituals related to the great aspirations of mankind are both sacred ceremonies and playthings for young minds; so also are court ceremonies and operas for the social elite, or baseball games for the crowds. Some men work hard at acquiring knowledge and providing society with what it needs to enjoy warmth and lighted palaces; others play at imagining themselves perfect spheres of multicolored radiance — soap bubbles so soon proven evanescent!

	At this third stage of the thirty-ninth sequence we deal with another aspect of the cultural life made possible, in a sense, by the two just symbolized. It is a symbol of IMAGINATIVE PLAY, which foreshadows the idea of "global man," the man of plenitude.`
},
{
	sign: "Libra",
	degree: "14",
	title: "IN THE HEAT OF THE NOON HOUR A MAN TAKES A SIESTA.",
	keynote: `KEYNOTE: The need for recuperation within the social pattern of everyday activity.`,
	description: `At the emotional-cultural level man today is not able to sustain constant activity. There must be rest periods, siestas or coffee breaks, during which the individual withdraws within his own sphere of selfhood, not only for physical relaxation but for allowing the strange, but evidently necessary play of dream fantasies. Social structuring cannot be maintained healthfully without breaks, in whatever climate man may live. Besides, the body needs quiet and relaxation from nervous tension after what is often the main meal of the day.

	This fourth stage symbol can be seen as emphasizing the need for techniques of RELAXATION, and the need to allow the functions of body and psyche to "digest," free from external pressures, the complex experiences of social living and particularly of business.`
},
{
	sign: "Libra",
	degree: "15",
	title: "CIRCULAR PATHS.",
	keynote: `KEYNOTE: Coming to terms with the inevitability of establishing steady rhythms of social activity.`,
	description: `In his early course, "Symbolical Astrology," Marc Jones sought to concretize this abstract image by speaking of "machinery parts, new and circular." It is far better, however, to face the image in its most general sense, as he himself did later on. It is because everyday activities, whether in the home or in business, inevitably tend to repeat themselves in circular fashion that it is necessary for the individual to have rest times during which he can be released from repetitive patterns. It is only when the individual has become fully attuned to, and in a sense identified with the vast planetary and cosmic rhythms of the universe, and thus free from emotional and group tensions, that he can act serenely and at peace along "circular paths."

	At this last stage of the thirty-ninth sequence of five symbols we find an abstract image which can be interpreted in a positive or negative manner. We deal with repetitive activity; but that activity may either bind or free the consciousness of the actor. It can mean BOREDOM or TRANSPERSONAL PEACE in action.`
},
{
	sign: "Libra",
	degree: "16",
	title: "AFTER A STORM A BOAT LANDING STANDS IN NEED OF RECONSTRUCTION.",
	keynote: `KEYNOTE: The need to keep in operation steady links between the vast Unconscious and the ego-consciousness.`,
	description: `Confrontation with broad issues of relationship and currents of energies released by man's contact with archetypal-spiritual realities often results in temporary destruction. "Boats" normally link distant regions, or enable men to draw food from the sea (i.e. new realizations which so far existed only in the unconscious realm of the planetary Mind). They may also be used to enjoy temporary excursions and the feel of the water and the waves. Any cultured society, however, may be wary of the danger inherent in venturing far away from the consciously defined and socially structured ways of life. Such adventures may indeed turn destructive; the points of contact between the vast Unconscious and the ego-consciousness molded by cultural assumptions and rituals may be wrecked by psychotic storms. The boat landings must then be slowly reconstructed.

	This is the first stage in the fortieth five-fold sequence of cyclic phases in human experience. It brings to us vividly the realization that whatever men build in order to be able to venture away from solidly individualized and conscious bases of operation is likely to be damaged by as yet unfamiliar cosmic forces. The tenuous link between two realms constantly needs REPAIR.`
},
{
	sign: "Libra",
	degree: "17",
	title: "A RETIRED SEA CAPTAIN WATCHES SHIPS ENTERING AND LEAVING THE HARBOR.",
	keynote: `KEYNOTE: The capacity to gain an objective and calm understanding of human experiences in which one was once deeply involved.`,
	description: `Old age may or may not bring to man this objective and calm understanding as one remembers the crises overcome and the quiet enjoyment of great life vistas or "peak experiences," but wisdom and inner serenity can hardly develop save on the basis of the overcoming of struggles and conflicts. The "sea captain" sailed his ship through storms and still waters of consciousness, his mind perhaps battered by gales, his ego-crew perhaps in revolt. Now there is peace and quietude. Another generation is sailing seas better charted perhaps, yet inherently non-rational and at times savage in their fury. He watches. He knows. Others are learning. At any age the ego-will may "retire" and contemplate, and be at peace before a greater voyage over even more poorly charted seas.

	At this second stage we sec a picture of true overcoming of storms, in polar opposition to the preceding one which revealed the destructive effect of psychic upheavals tearing apart the occult link — the antakarana — between the incarnate consciousness and the transcendent Soul-field, the CALM MIND beyond struggles and victories.`
},
{
	sign: "Libra",
	degree: "18",
	title: "TWO MEN PLACED UNDER ARREST.",
	keynote: `KEYNOTE: A breakdown in the constructive relationship between the individual and society, and the expectable result.`,
	description: `If it is to remain steady and consistent, every form of order must be able to protect itself by the application of sanctions. Both a society and a personal ego constitute forms of order. Any form of order excludes what the form cannot securely and safely hold. It excludes, or exiles, the alien, the unassimilable; if it cannot send them to outer space, it must isolate them in a special type of inner space, a prison. The individual whose actions introduce unacceptable principles into the established order runs the risk of being "punished" or re-formed according to this order. The problem for a society is how to include in its patterns of order agencies or channels for transformation — and particularly how to keep them truly operative; for individuals, it is how to make their transforming vision or impulse acceptable to society. The symbol does not reveal what caused the breakdown in the relationship between the individual and society; but if one also considers the symbols that follow, one's thoughts may be led back to the image of the storm that wrecked boat landings (Phase 196). The suggestion is that whatever violence is released originates in unconscious pressures (the sea and the wind). A new step in the evolution of society — the Industrial and Electronic Revolutions of the last hundred and fifty years — caused a collective, world-wide upheaval which led to widespread violence. The fact that two men are pictured under arrest suggests a polarization and a purpose transcending a merely personal fit of recklessness.

	This is the third stage of the fortieth sequence. Negative as the image may seem, one may see implied in it the power in every individual to assume social risks in order to express his convictions or deepest desires. Nevertheless, one thing is needed: FACING THE CONSEQUENCES.`
},
{
	sign: "Libra",
	degree: "19",
	title: "A GANG OF ROBBERS IN HIDING.",
	keynote: `KEYNOTE: Protest against disharmonic social privilege.`,
	description: `It is questionable whether the formulation of the symbol at this place is adequate, but it is kept on general principle. One might rather think of Robin Hood and his band, or early Bolsheviks in Russia robbing banks to finance the revolution. The protest against an unbalanced society with its rigid stratification into classes can be seen as a positive factor, even if it challenges the principle of order, for it reveals dynamic qualities in individuals and the will to transformation. In another sense, it is the dark shadow of the ideal of "nonpossessiveness." The question is: How valid and effectual is this kind of protest?

	The fourth stage in a five-fold sequence of symbols and phases usually presents us with at least a hint of technique. What can this mean at this level? Perhaps the fact that any effective resistance to the momentum of crystallized institutions should be organized if it is to be effective. Individuals alone are impotent in producing actual changes in social consciousness. A "group" must be formed. The Keywords are GROUP PROTEST.`
},
{
	sign: "Libra",
	degree: "20",
	title: "A RABBI PERFORMING HIS DUTIES.",
	keynote: `KEYNOTE: The ability to draw on the power of an ancestral tradition in order to serve and inspire one's fellowmen.`,
	description: `Here we see at work the constructive use of rather rigid yet effectual sociocultural and religious patterns. The energies of the collective Unconscious are channeled through well-defined, age-old forms and formulas. This implies limitations and the possibility of sclerosis or inertia when confronted with new situations, yet there is beauty and wisdom in such a ritualization of behavior and of thinking.

	This is the fifth stage of the fortieth five-fold sequence. At this stage the relation of man, the individual, to his community — and beyond it, the universe — is seen in stabilized and effective operation. INHERITED WISDOM can be focused through a person who accepts its limitations.`
},
{
	sign: "Libra",
	degree: "21",
	title: "A SUNDAY CROWD ENJOYING THE BEACH.",
	keynote: `KEYNOTE: A revivifying contact with the Mother-force of nature and of social togetherness.`,
	description: `The sea is the vast matrix from which living organisms originally emerged. It also symbolizes the collective Unconscious, the "matricial" envelope of the biosphere within which consciousness takes individualized forms. The consciousness of human beings is given specific form by the culture in which they live and the particular occupations they carry on in everyday work. But it is very good and healthful for their minds to become revitalized by collective experiences and deep feelings of undifferentiated unity as they merge in the vast refreshment of the planetary "Mother" where "she" is most dynamic, unlimited and unconfined by boundaries.

	At this first stage of the forty-first five-fold sequence of symbols we see the foundation on which coming developments will be based. It is in a sense a biodynamic foundation, but it reaches beyond even the biosphere to what in all cosmic types of organization is the Mother-principle — for instance, galactic Space. We may speak here of OCEANIC FEELING, born of attunement to the most basic rhythms of existence, at whatever level it might be.`
},
{
	sign: "Libra",
	degree: "22",
	title: "A CHILD GIVING BIRDS A DRINK AT A FOUNTAIN.",
	keynote: `KEYNOTE: The concern of simple souls for the welfare and happiness of less-evolved beings who thirst for life renewal.`,
	description: `The original statement of this symbol is far more significant than the later formulation, for what is expressed here is a reversal of the operation mentioned in the preceding symbol. Man, who has built the fountain — perhaps on arid land and through skillful work — gives the life-bestowing water to the thirsting birds. He does not go to the sea, but he brings the purified, drinkable water to the birds needing it. The connection between "child" and "birds" implies a spontaneous, nai've rapport at the spiritual level, a soul-touch at the level of pure feelings. At this second stage of the five-fold process the contrast with the first takes on a suggestive aspect. What you received from the Infinite, you can give to the finite beings that thirst for it. Man does not need to destroy nature's wilderness through greed and carelessness; he can transform this wilderness into a garden, whose singing fountains will attract birds. We can use here Marc Jones's Keyword for this degree: SOLICITUDE. `
},
{
	sign: "Libra",
	degree: "23",
	title: "CHANTICLEER'S VOICE HERALDS SUNRISE.",
	keynote: `KEYNOTE: A creative and joyous response to life processes.`,
	description: `The cock that crows as the first coloring of dawn appears at the eastern horizon is a beautiful symbol of the ability, demonstrated by all pioneers and cosmically attuned individuals, to give voice to what is as yet unmanifested, but is on the way to manifestation. At the ego level, chanticleer may feel that he makes the sun rise; but someday he will learn through painful experiences that to create is only to reveal what essentially is. It is the vivid recognition of the as-yet-unknown in the known.

	This third stage symbol should make us think afresh about issues we too often take for granted. At every "sunrise" there are a few isolated witnesses that herald the coming of a new day. What is at stake here is the individual's capacity of RESPONSE TO LIFE'S RENEWALS — renewals which are cyclic, predictable, yet always new, always creative.`
},
{
	sign: "Libra",
	degree: "24",
	title: "A BUTTERFLY WITH A THIRD WING ON ITS LEFT SIDE.",
	keynote: `KEYNOTE: The ability to develop, for inner strengthening, new modes of response to basic life situations.`,
	description: `The butterfly is the ancient and traditional symbol of the results of the process of spiritual rebirth. If the butterfly has three wings instead of two, a special development of an aspect of the spiritual life is shown. Three is a symbol of fulfillment. Some power has been added to the normal spiritual life of the individual person. The left side usually refers to the instinctual field of the consciousness, but it is also the heart's side. A new strength is shown, perhaps as yet unrealized.

	A fourth stage symbol usually refers to some kind of technique or technical achievement. What is implied here is that the contact with the revivifying Life-force (cf. the first stage symbol) can result in the appearance of a new faculty, the use of which may not as yet be consciously evaluated. Indeed it is the establishment of such a contact which constitutes a technique for ORIGINAL MUTATION.`
},
{
	sign: "Libra",
	degree: "25",
	title: "THE SIGHT OF AN AUTUMN LEAF BRINGS TO A PILGRIM THE SUDDEN REVELATION OF THE MYSTERY OF LIFE AND DEATH.",
	keynote: `KEYNOTE: The ability to discover in every experience a transcendent or cosmic meaning.`,
	description: `The mind open to the multifarious wonders of natural processes, because it sees everything with fresh eyes, not only witnesses simple facts, but pierces through appearances and perceives the great rhythms of universal life. Without such a faculty the aspirant to spiritual realities is always looking for "elsewhere." Yet the spirit, life, God is ever present, here and now. And every death is an omen of rebirth.

	At this fifth stage of the forty-first five-fold sequence of phases of the cosmic process, the implications of the four preceding stages are brought to a new state of consciousness which is truly the spiritual state. It is a state of CLAIR-SEEING, or "seeing through." This world is illusion only to the individual who cannot see through its phenomena and fails to apprehend the reality these phenomena reveal even as they conceal it.`
},
{
	sign: "Libra",
	degree: "26",
	title: "AN EAGLE AND A LARGE WHITE DOVE CHANGE INTO EACH OTHER.",
	keynote: `KEYNOTE: The interaction of the spiritual Will and of the Love principle when critical needs arise.`,
	description: `This sequence of symbols concluding the Libra phase of the cycle deals with problems met by the seeker for the fulfillment of a higher life of Relationship. Implied here is a kind of Yang-Yin interplay. When the circle encompassing both principles rotates fast, they appear to change into each other. Consciousness operates beyond duality, because the polarized energies of the Soul (or spirit). Will and Love, though ever distinct, work for a single purpose.

	This is the first stage of the forty-second five-fold set of symbolic phases. It represents a new, higher approach to the use of polarized forces within the personality which has been ever so little transformed and operating within a new framework. The Keyword ADEPTNESS fits this phase — but there are many levels of "adept-ship"!`
},
{
	sign: "Libra",
	degree: "27",
	title: "AN AIRPLANE SAILS, HIGH IN THE CLEAR SKY.",
	keynote: `KEYNOTE: A consciousness able to transcend the conflicts and pressures of the personal life.`,
	description: `This picture symbolizes the capacity, latent in every individual, to contemplate the stress of existence in our world of duality from a higher level. Through the use of his mind, backed by the efforts and struggles of past generations and the cooperation of other men, the individual can gain a new perspective on human problems and reach freedom and peace in a supernal realm of being.

	This second stage symbol contrasts with the first, for while the first dealt with the cooperation between polarized energies, this one introduces us to the realm of unity beyond polarity. It is a stage of TRANSCENDENT REALIZATION.`
},
{
	sign: "Libra",
	degree: "28",
	title: "A MAN BECOMING AWARE OF SPIRITUAL FORCES SURROUNDING AND ASSISTING HIM.",
	keynote: `KEYNOTE: The realization, at any level of existence, that one is never alone, and that the "community" — visible or invisible — is sustaining one's efforts.`,
	description: `Every individualized organism is part of a larger organized whole, whether or not it is aware of this or of the sustaining power of the whole. A man, however, can deliberately choose to follow the dark path of ego-isolation which sooner or later always leads to destruction and self-loss in "matter." At the animal level, the whole biosphere is the community; for the ordinary human being, it is the tribe or family, the village community, the nation. As the individual expands his consciousness, he may become aware of a spiritual community, even beyond the "noosphere" (the one Mind of humanity), i.e. the realm of the pure light of the "Supermind," which is what the concept of the "White Lodge" suggests.

	This is the third stage of the forty-second five-fold sequence. To the man who has ever so little transcended the world of conflicts, and, for a moment at least, experienced the oneness of all existence, this stage should bring the realization of "belonging" to a greater whole. This produces a state of INNER ASSURANCE.`
},
{
	sign: "Libra",
	degree: "29",
	title: "MANKIND'S VAST AND ENDURING EFFORT TO REACH FOR KNOWLEDGE TRANSFERABLE FROM GENERATION TO GENERATION.",
	keynote: `KEYNOTE: A deep sense of participation in, and commitment to, social processes which seek to bring to all men Truth and a greater Life.`,
	description: `The most characteristic trait in human nature is the ability to "bind time" (as Korzybsky once stated): that is, to transfer to other men as yet unborn the harvest of his conscious experiences and his deliberate endeavors. This ability far transcends instinct and biological mutations, for it is based on consciousness, choice, will and self-sacrifice for the sake of future human beings. It rests upon a deep feeling of the value of "community"; its use increases this feeling and eventually destroys the roots of loneliness.

	This fourth stage symbol suggests the technique that makes a life truly "human." To join other men and women in the vast process of a living civilization is to fulfill the basic implications of the human stage of cosmic evolution — a stage characterized by CONSCIOUS PARTICIPATION.`
},
{
	sign: "Libra",
	degree: "30",
	title: "THREE MOUNDS OF KNOWLEDGE ON A PHILOSOPHER'S HEAD.",
	keynote: `KEYNOTE: The fulfillment of man's power of understanding at whatever level of existence the person operates.`,
	description: `A true philosopher is a man who is able to "understand," not merely "know," the processes of life as he comes to experience them directly. He is the man of wisdom, different indeed from the man of science; for while there must be knowledge before understanding, knowledge alone can be both barren and destructive of wisdom. This peculiar symbol refers of course to "phrenology," which is usually considered a pseudo-science, but may provide significant indications. Number 3 always indicates a state of completion. The symbol implies a fulfillment of philosophical understanding, which obviously has nothing to do with academic degrees or the writing of successful treatises on abstract concepts.

	This fifth stage symbol is the last of the Libra series: Understanding and wisdom develop in terms of the life of community and through experiences provided by interpersonal and group relationships. Cultural factors are always involved, even though true wisdom transcends cultural values and is rooted in the essential nature of Man. What is at stake here is A HOLISTIC APPROACH TO KNOWLEDGE, based on universals.`
},
{
	sign: "Scorpio",
	degree: "01",
	title: "A CROWDED SIGHTSEEING BUS ON A CITY STREET.",
	keynote: `KEYNOTE: The fundamental human eagerness to expand one's social horizon and to experience the results of collective achievements and new ways of life.`,
	description: `In this symbol we are dealing with a group-experience of a vast collective achievement, a city. Individuals coming from a variety of places and backgrounds "commune" in new awareness of a greater whole of human existence, an organized whole with its own rhythms of multifarious activity. New feelings and an expansion of consciousness result. What begins in the Libra phase of the cycle is given substantiation during the Scorpio phase. The process of "initiation" into collective values is now reaching the feeling nature.             

	This symbol begins the forty-third five-fold sequence. It refers to the first realization of what a larger whole of existence — a more encompassing frame of reference — implies, in very concrete and perhaps startling terms. What is at stake is A WIDENING OF EXPERIENCE.`
},
{
	sign: "Scorpio",
	degree: "02",
	title: "A DELICATE BOTTLE OF PERFUME LIES BROKEN, RELEASING ITS FRAGRANCE.",
	keynote: `KEYNOTE: The accidental nature of opportunities that impel one to break away from a past, the remembrance of which is still poignant and cherished.`,
	description: `A new and greater realization usually demands the sacrifice of something which has brought loveliness and fragrance to a lesser form of living and feeling. Old feelings are poignantly remembered, even as one moves into a new and wider sphere of experience. Old relationships may be left behind, but the memory of their essential moments lingers on, perhaps strong and nostalgic.

	This is the second stage of the forty-third sequence. It contrasts with the first in that it reveals the difficulty of dealing with the past as one enters into a new realm of feelings. To the excitement of novelty answers the memory of the graciousness of the past one has SURRENDERED.`
},
{
	sign: "Scorpio",
	degree: "03",
	title: "A HOUSE-RAISING PARTY IN A SMALL VILLAGE ENLISTS THE NEIGHBORS' COOPERATION.",
	keynote: `KEYNOTE: The feeling of community demonstrated in a basic joint effort.`,
	description: `In rural neighborhoods, especially as the American West was being developed, the building of at least the framework of a house was often a collective, friendly enterprise. Newcomers building their home-to-be found friendly helpers in their neighbors. The sense of togetherness and participation in a common enterprise was developed by such collective work. The home remains "our" home, yet the whole community is involved in its erection and the welcome marking its completion.

	At this third stage of the five-fold sequence, feeling becomes activity. The past and its memories are repolarized in terms of the expanded social consciousness. From that activity a new sense of reality will derive. The Keyword is COOPERATION.`
},
{
	sign: "Scorpio",
	degree: "04",
	title: "A YOUTH CARRIES A LIGHTED CANDLE IN A DEVOTIONAL RITUAL.",
	keynote: `KEYNOTE: The educative power of ceremonies which impress the great images of a culture upon its gathered participants.`,
	description: `A community of human beings is ensouled by a few basic symbols which structure and illustrate the group's particular culture and way of life. Rituals and social ceremonies of all types (from a baseball game to a ticker-tape parade for returning heroes, or a religious service in an old cathedral) incorporate these symbols in traditional forms of activity. As they participate in these collective presentations of commonly accepted values and ideals, the minds and feelings of young people are formed by these symbols. They take the values for granted until the day when they choose to assert their individuality — or their participation in a generation's revolt — by scorning the traditional rituals, including as well business rituals. Then they may poignantly search for new ones to participate in!

	This fourth stage symbol pictures for us the method by which a community of feelings is built during the formative years of childhood and adolescence. The zodiacal sign Scorpio is especially related to rituals including the sex rituals which unite the communicants at the roots of their beings. In these sex rituals too, THE POWER OF SYMBOLS is evident, above and beyond the mere biological act.`
},
{
	sign: "Scorpio",
	degree: "05",
	title: "A MASSIVE ROCKY SHORE RESISTS THE POUNDING OF THE SEA.",
	keynote: `KEYNOTE: The inertia of all institutionalized procedures.`,
	description: `Slow is the rise of the land from the vast ocean, but once it is formed it develops a formidable resistance to change in spite of storms. Likewise, once a culture has expressed its basic symbols and its particular way of thinking, feeling and acting in concrete institutions, these change very slowly indeed. The individual who came to the great city (Scorpio i° symbol) soon finds his life set by the rhythms of city living, which obliterate vaster life processes and the moving tides of evolution.

	This is the last of the five symbols of the forty-third sequence. We see in it how binding and resistant a communal way of life can become. In this there is strength and stability, and these are necessary factors in the social life of man — until new horizons beckon. The Keyword is STABILITY.`
},
{
	sign: "Scorpio",
	degree: "06",
	title: "THE GOLD RUSH TEARS MEN AWAY FROM THEIR NATIVE SOIL.",
	keynote: `KEYNOTE: The passionate search for new values which, at any level, promise a more abundant life.`,
	description: `The greatness of man is that he can always be greater; likewise, at a national level, man's "greed" can more easily be aroused by whatever promises more wealth, more power, and ever-greater achievements at all levels, spiritual as well as material. Beyond this arousal of greed is the deep-seated desire to play a more important or spectacular role in one's society or community. Greed is the perverse intensification of the social sense, just as lust is the perverse intensification of the longing for love. Always at this Scorpio level the yearning is for an ever more intense and all-absorbing union with a person or a community — a yearning which motivates a search for more effectual means to achieve as total a feeling experience as is possible.

	This is the first stage of the forty-fourth sequence of symbolic phases in the cycle of existence. It dramatizes the capacity in man to tear himself away from the known and the familiar, gambling everything on a vision or dream. A Keyword could be AVIDITY.`
},
{
	sign: "Scorpio",
	degree: "07",
	title: "DEEP-SEA DIVERS.",
	keynote: `KEYNOTE: The will to explore the hidden depths of all experiences and to search for primordial causes.`,
	description: `This symbol essentially refers to depth psychology — a coming to terms with the collective Unconscious and its contents. This type of depth-plumbing adventure is basically different from the one symbolized by the gold rush, for it can take place within the individual and with no relation to social value. It refers symbolically to a quest for "under-standing" — i.e. for what lies under the surface waves of daily living. This quest may lead to great dangers. It demands a strong will and good breathing — i.e. a degree of spiritual strength. It usually challenges powers hidden in the depths of the unconscious.

	The contrast between "deep-sea divers" and "men of the gold rush" is significant. It presents in an interesting manner the opposition between a first stage and second stage symbol in the five-fold sequence of cyclic phases. The inward quest opposes the outward search for the great social symbol, gold. It should lead to a DEPTH REALIZATION of the very roots of consciousness.`
},
{
	sign: "Scorpio",
	degree: "08",
	title: "A CALM LAKE BATHED IN MOONLIGHT.",
	keynote: `KEYNOTE: A quiet openness to higher inspiration.`,
	description: `One could stress the romantic suggestions such an image evokes, but even at the level of a love relationship what is implied is a surrender of two personal egos to the inspiration of transcendent feelings which are essentially impersonal. Love expresses itself through the lovers, for real Love is a cosmic undifferentiated principle or power which simply focuses itself within the "souls" of human beings who reflect its light. The same is true of the mystic's love for God. Man strives hard to achieve great things through daring adventures, but a moment comes when all that really matters is to present a calm mind upon which a supernal light may be reflected.

	This is the third stage of the forty-fourth five-fold sequence. It tells us that beyond all efforts lays the need for peace and the readiness to accept the illumination from above. The Keyword is QUIESCENCE.`
},
{
	sign: "Scorpio",
	degree: "09",
	title: "A DENTIST AT WORK.",
	keynote: `KEYNOTE: Overcoming the negative results of social practices and ego-cravings.`,
	description: `In order to properly evaluate and interpret this symbol, we should realize the meaning of the teeth. Permanent teeth appear normally at age 7, when, according to some occultists, the personalized individuality of the child — the ego — takes full control of the physical organism. The teeth are used to tear down foodstuffs so they can be digested and assimilated. Social living and cultural patterns impose upon us certain habits of eating, arouse desires for unwholesome or denatured food, force us perhaps to eat in tense circumstances and hurriedly. This results in tooth decay far more frequently than should be inevitable through aging. The symbol therefore shows us how society and civilization, which may indirectly cause tooth decay, then have to invent means to skillfully repair the damage.

	At this fourth stage of the five-fold sequence we see once more a hint of technique. Life in society both perverts, and repairs, destroys and rebuilds — truly a vicious cycle. Man is compelled by social needs to display INVENTIVENESS.`
},
{
	sign: "Scorpio",
	degree: "10",
	title: "A FELLOWSHIP SUPPER REUNITES OLD COMRADES.",
	keynote: `KEYNOTE: The overtones of human relationships based on a community of work or experiences.`,
	description: `This symbol pictures the essential nature of the bond that unites individuals who have participated in some common activity. The social feeling of communion, plus all that it engenders, arises after the act performed together. Activity is at the root of consciousness. Activity in common generates social consciousness and cultural patterns which become set in the form of institutions. A group-personality emerges, which displays characteristic features and gives birth to collective emotions and values.

	This is the final stage of the forty-fourth five-fold sequence. Wherever the symbol appears, it suggests the importance of establishing or strengthening links with those with whom one has shared, or can share, living experiences. The value of COMRADESHIP is emphasized.`
},
{
	sign: "Scorpio",
	degree: "11",
	title: "A DROWNING MAN IS BEING RESCUED.",
	keynote: `KEYNOTE: The deep concern of the social group for the safety of individuals.`,
	description: `This symbol should be interpreted as revealing the basic feeling of relationship between the individual and his fellow-men. What is pictured is the expression of this 'relationship rather than the experience of the person who, carelessly perhaps, ventured too far beyond his depth and then was given a "second chance" to live. A man risks his life to save another: this is love, based on a sense of responsibility produced by a vivid sense of interrelatedness. Sustained by this love, the individual may be more secure in venturing forth; but this assurance can also lead to unwarranted daring and trust.    

	This is the first stage of the forty-fifth sequence of five symbolic phases. It pictures the concern of the social whole for any one of its parts, even if this concern is merely the spontaneous act of rescue performed by a chance bystander. The HUMANITARIANISM thus displayed has deep cultural roots.`
},
{
	sign: "Scorpio",
	degree: "12",
	title: "AN OFFICIAL EMBASSY BALL.",
	keynote: `KEYNOTE: Group-consciousness, as it flowers at the highest level in cultural interchanges between representatives of the elite of the ruling class.`,
	description: `At present the largest unit of social organization is the nation. The symbol pictures the ruling class of such national wholes displaying at least the superficial forms of a concern for establishing permanent relationships in peaceful cooperation. What is evoked is the value of meeting other people at the highest possible level of cultural interplay (i.e. in "full dress"), rather than with an everyday type of consciousness and behavior.

	In contrast to the natural spontaneity of the rescue operation shown in the preceding symbol, we have here the image of a ritualized DISPLAY of power, prestige and wealth. Relationship has been made hierarchical and is institutionalized. Phase 222 tells us that this too is an essential feature in the development of rhythmic give-and-take in order to achieve global peace.`
},
{
	sign: "Scorpio",
	degree: "13",
	title: "AN INVENTOR PERFORMS A LABORATORY EXPERIMENT.",
	keynote: `KEYNOTE: The driving urge toward achievement, which is at the root of civilization.`,
	description: `At whatever level, the development of more complete and efficient forms of social interplay — the essence of the process of civilization — demands ingenuity, inventiveness and the willingness to experiment within relatively secure test conditions. One must try to go to the roots of problems of interpersonal or international relations, as well as to discover the principles controlling the interaction between material particles and larger bodies. Modern technology is only one approach to an immensely complex problem. Intuition is as necessary to success as intellectual analysis.

	This is the third stage of the forty-fifth sequence of five symbols. The symbol stresses the value of individual initiative, perseverance and caution in any attempt to understand how everything is related to everything else. What is most needed is the ABILITY TO RELATE SEEMINGLY UNRELATED FACTS.`
},
{
	sign: "Scorpio",
	degree: "14",
	title: "TELEPHONE LINEMEN AT WORK INSTALLING NEW CONNECTIONS.",
	keynote: `KEYNOTE: The need to establish new channels of communication.`,
	description: `The growth of community feeling among separated human beings requires the development of constantly more complex means of interchanging feelings and ideas. Wherever this symbol for Scorpio 14° is found, the indication is that such channels of communication are essential for the success of any interpersonal relationship. They are not only to be built, but to be used significantly and wisely.

	This fourth stage symbol brings to our attention the essential value of communicating with our fellow men and even our close associates — with whom such a communication may not always be easy. There can be no communion without communication at some level, including the level of biological attunement. Keyword: THE WILL TO ASSOCIATION or COMPREHENSION.`
},
{
	sign: "Scorpio",
	degree: "15",
	title: "CHILDREN PLAYING AROUND FIVE MOUNDS OF SAND.",
	keynote: `KEYNOTE: Early steps in the development of a mind seeking to be attuned to the higher level of human evolution.`,
	description: `This is a particularly cryptic symbol. It may be deciphered if one realizes that Man's essential destiny is to develop as a five-fold being, a "Pentagram" or five-pointed star. Number 5 symbolizes mind in its most creative and penetrating aspect, while number 4 refers to the life processes operating at present within the earth's biosphere. Our Western civilization has realized only the lower level of this vibration 5; i.e. mind contaminated by compulsive instincts and emotional involvement. Some individuals, however, are born with a special potential for development of the higher, creative mind, and in social circumstances favoring this development. In most cases, they are still "playing around" with their unusual capacity. They are in the kindergarten stage of this higher mind development.

	In this final stage of the forty-fifth sequence of five symbols the transcendent possibilities of mental evolution, which require interpersonal communion in consciousness, are evoked. The free spirit of true scientific inquiry is only a foreshadowing of such a type of mind, which demands dedication to mankind as a whole. What is seen here is FUTURE-ORIENTED GROWTH.`
},
{
	sign: "Scorpio",
	degree: "16",
	title: "A GIRL'S FACE BREAKING INTO A SMILE.",
	keynote: `KEYNOTE: The fervent reaching out on the part of the young of heart to new experiences.`,
	description: `Faith in life and in other human beings enables us to go forth toward relationships with whatever attracts our senses or stirs our imagination. Smiling is perhaps a uniquely human characteristic because it implies a conscious acceptance of relationship, thus a choice. The animal, on the other hand, is compelled by unconscious instinct, at least in its natural state. It is not free to choose between love and hate.

	This is the first symbol of the forty-sixth five-fold sequence. It introduces us to a series of responses to human experience and pictures a glowing WARMTH OF FEELING.`
},
{
	sign: "Scorpio",
	degree: "17",
	title: `A WOMAN, FECUNDATED BY HER OWN SPIRIT, IS "GREAT WITH CHILD."`,
	keynote: `KEYNOTE: A total reliance upon the dictates of the God-within.`,
	description: `In contrast to the outgoing smile of the girl in the preceding symbol, here we see the result of a deep and complete concentration reaching to the innermost center of the personality where the Living God acts as a fecundating power. This reveals the potency of the inward way, the surrender of the ego to a transcendent Force which can create through the person vivid manifestations of the Will of God.

	This second phase of the forty-sixth five-fold sequence brings to us the realization of normally hidden potentialities in the average human being of our day. Faith in the Divine is shown here being concretely justified. The human person becomes a "mother of the Living God." This is THE TRANSPERSONAL WAY of existence. It is the way that leads to creative mutations.`
},
{
	sign: "Scorpio",
	degree: "18",
	title: "A PATH THROUGH WOODS BRILLIANT WITH MULTICOLORED SPLENDOR.",
	keynote: `KEYNOTE: The exalted feeling of a work well done and a truly consummated life.`,
	description: `The person who has lived with faith the transpersonal life — the life through which spirit radiates creatively — can experience blessedness and peace, even though his or her cycle of experience nears its end. It has been a life full of seed. The seeds are hidden perhaps, yet they are filled with the power to overcome cyclic death. The soul is at peace. The clear autumnal sky silently intones the great message: "Well done, little man!"

	In this third symbol of the five-fold sequence we see the smile of the youth brought to a more mature, more spiritual culmination. Human nature is a magnificent symphony of warm, rich colors, now that the strictly biological green of vegetation experiences its TRANSFIGURTION.`
},
{
	sign: "Scorpio",
	degree: "19",
	title: "A PARROT REPEATS THE CONVERSATION HE HAS OVERHEARD.",
	keynote: `KEYNOTE: The capacity to transmit transcendental knowledge.`,
	description: `To the individual who lives in a state of ardent and sustained faith it may become possible to become a channel for the trans-mission of a knowledge or wisdom that transcends his normal mental understanding. The mind that has learned to be silent and attentive can become attuned to the rhythm of utterances which he may not comprehend intellectually, yet which may truly manifest superhuman realizations.  Discrimination is needed here to balance the over-eagerness of faith.

	At this fourth stage of the five-fold sequence of symbols we are given a hint as to man's capacity to attune himself to sources of higher wisdom if he can be sufficiently attentive and careful in channeling a "higher Voice." To stress here the negative element of automatism and unintelligent repetition is to use only one's intellect. All birds in symbolism suggest spiritual faculties or forces. What is evoked is the possibility of learning from higher Intelligences. Keyword: CHANNELSHIP.`
},
{
	sign: "Scorpio",
	degree: "20",
	title: "A WOMAN DRAWS AWAY TWO DARK CURTAINS CLOSING THE ENTRANCE TO A SACRED PATHWAY.",
	keynote: `KEYNOTE: The revelation to the human consciousness of what lies beyond dualistic knowledge.`,
	description: `The "Woman within" — the faith that is rooted in the deepest intuitions of the soul — is seen here as the hierophant unveiling the realities which the either-or, pro-and-con mind of man alone cannot perceive. The path to the mystic's "unitive life" is opened up once the darkness of fear, egocentricity and dualistic morality is removed.

	This is the last symbol of the forty-sixth five-fold sequence. It reveals what a positive reliance upon faith and intuition can bring about. Courage is needed to go through the veiling darkness — the courage to venture beyond the familiar and the traditionally known, to PLUNGE AHEAD INTO THE UNKNOWN.`
},
{
	sign: "Scorpio",
	degree: "21",
	title: "OBEYING HIS CONSCIENCE, A SOLDIER RESISTS ORDERS.",
	keynote: `KEYNOTE: A readiness to face the results of a refusal to follow the authoritarian patterns of an aggressive society.`,
	description: `As a person finds himself involved in activities which are traditional in his particular culture — and in many instances in all societies at this stage of human evolution — he often faces a conflict between his own individual sense of value (his conscience) and the demands of society. The conflict may be most typical in terms of the armed services — thus this symbol. In it we find the individual asserting his own values, though he cannot escape the consequences of his decision. In such a case he has to be quietly ready to face these consequences, whatever the cost.

	This is the first stage in the forty-seventh five-fold sequence of phases in the great cyclic ritual of activity. The issue it presents is clear. Society in this situation seems to be all-powerful; yet the individual need not be spiritually bound, even if imprisoned. He still can display INNER FREEDOM and prove himself an "individual."`
},
{
	sign: "Scorpio",
	degree: "22",
	title: "HUNTERS SHOOTING WILD DUCKS.",
	keynote: `KEYNOTE: The socially accepted release of an individual's or a group's aggressive instincts.`,
	description: `What this symbol clearly stresses is the socialization of man's primitive instincts according to a cultural ritual. Social hunting is a regulated seasonal outlet for male aggressiveness — a safety valve for emotional pressures in human beings in whom animal compulsions and bio-spheric values are still strong.

	In this second stage symbol we find a strong contrast with the first. In the latter, the individual proved himself truly "man" by refusing to accept the practices of war imposed upon him by his society; in this symbol for Scorpio 22° it is society that willingly accepts — and in accepting, ritualizes and to some extent refines — the aggressiveness inherent in most individuals. The Keywords are SOCIALIZATION OF INSTINCTS.`
},
{
	sign: "Scorpio",
	degree: "23",
	title: "A RABBIT METAMORPHOSES INTO A NATURE SPIRIT.",
	keynote: `KEYNOTE: The raising of animal drives to a higher level.`,
	description: `The rabbit is traditionally a symbol of an overabundance of progeny, thus of a great stress on procreative and sexual processes. "Nature spirits," on the other hand, represent the higher aspect of life energies, as they are said to guide those normally invisible forces controlling the growth of all living organisms, particularly in the vegetable kingdom. Thus the symbol refers to the transmutation of the generative power into a more ethereal and subtle form of potency.

	This is the third symbol in the forty-seventh sequence. It brings a new dimension to the preceding two. Whether it is the sexual desire for a progeny, or aggressiveness, the instinctual urge can be raised to a new level. The course can become subtle through a process of TRANSUBSTANTIATION.`
},
{
	sign: "Scorpio",
	degree: "24",
	title: `AFTER HAVING HEARD AN INSPIRED INDIVIDUAL DELIVER HIS "SERMON ON THE MOUNT," CROWDS ARE RETURNING HOME.`,
	keynote: `KEYNOTE: The need to incorporate inspiring experiences and teachings into everyday living.`,
	description: `Today we hear a great deal about "peak experiences" (Maslow). The great problem facing everyone who has had such experiences is how to assimilate what has been felt, seen or heard, and how to let it transform his everyday consciousness and behavior. If this is not done the experience may turn confusing or toxic and perhaps destructive of the integrity of the person.

	This fourth symbol as usual suggests to us what has to be done or how to do it. The "return home" from the high mountain, or from any "upper chamber" of the consciousness, may lead to a sense of oppression by the normal realities of existence, or else the soul that has been illuminated may retain enough of that light to transfigure every daily situation. This is the great CHALLENGE TO TRANSFORMATION.`
},
{
	sign: "Scorpio",
	degree: "25",
	title: "AN X-RAY PHOTOGRAPH.",
	keynote: `KEYNOTE: The capacity to acquire a knowledge of the structural factors in all existence.`,
	description: `The true philosopher is able to grasp and significantly evaluate what underlies all manifestations of life. His mind's eye penetrates through the superficialities of existence and perceives the framework that gives an at least relatively permanent "form" to all organized systems. Thus if the structure is weak, deformed by persistent strain, or unbalanced, the basic causes of outer disturbances and dis-ease can be discovered.

	This symbol concludes the forty-seventh five-fold sequence. It gives an added dimension to the preceding four. For instance, it provides the conscience of the individual who refuses to obey his society with a depth-understanding of what is wrong in the situation he faces. Beyond the powerful feeling quality of "peak experiences," the mind can understand the great Principles of which they were the manifestations. This is STRUCTURAL KNOWLEDGE in contrast to existential knowledge.`
},
{
	sign: "Scorpio",
	degree: "26",
	title: "AMERICAN INDIANS MAKING CAMP AFTER MOVING INTO A NEW TERRITORY.",
	keynote: `KEYNOTE: The ability to adjust swiftly to a new situation by tuning in to its requirements.`,
	description: `He who lives in harmony with nature, moving on as new needs arise, finds himself intuitively at home everywhere. He does not make demands upon life, for he has identified himself with the great rhythms of the biosphere and he functions at peace with what they produce. This is the message of the American Indian culture which European invaders so wantonly and meaninglessly destroyed nearly everywhere. Western man has lost faith in life because he wants to dominate and enslave manifestations.

	This represents the first stage of the forty-eighth five-fold sequence in the cycle of experience. It brings to us a message we greatly need today — the message of peaceful adaptation to nature, and through adaptation, of EFFICIENT FUNCTIONING in all life situations.  `
},
{
	sign: "Scorpio",
	degree: "27",
	title: "A MILITARY BAND MARCHES NOISILY ON THROUGH THE CITY STREETS.",
	keynote: `KEYNOTE: The aggressive glorification of cultural values.`,
	description: `Every cultural-social collectivity sooner or later tries to impress the value of its achievements forcibly and noisily upon all those who belong to it, as well as upon foreign onlookers. At the individual-mental level the member of such a collectivity swells with pride and excitement when a display of the excellence of that in which his consciousness and personality are deeply rooted is publicly affirmed. Thus the feeling of social unity binds the individuals of a culture through collective pride.

	This second stage symbol contrasts sharply with the first one. Our aggressive, tense, domineering Western civilization is indeed in opposition to the natural spontaneity and instinctive adjustment to nature of tribal societies. The Keyword here is POMP.`
},
{
	sign: "Scorpio",
	degree: "28",
	title: "THE KING OF THE FAIRIES APPROACHING HIS DOMAIN.",
	keynote: `KEYNOTE: The capacity in man to recognize and to pay homage to an integrating Principle at the core of all existence.`,
	description: `This rather peculiar picture tells us perhaps a good deal about the limitations of the mind of the clairvoyant who saw it, though it can be related to the symbolism of the various creatures of a spirit world mentioned in some alchemical and Rosicrucian books. What seems to be implied is that beyond both outer nature and the realm of the proud ego, a spiritual world exists to which the intuitive consciousness of man can pay allegiance. In that world, all manifested entities are seen as multiple aspects of a central Power and Consciousness. It is such a central principle of unity that human societies have sought to revere symbolically in human, all-too-human kings. In an individual sense, this principle is the Self.

	This is the third stage in the forty-eighth five-fold pattern of symbols. It adds a new dimension to the two preceding ones. At this stage the presence of a spiritual unifying factor begins to be sensed by the individual perhaps weary of the outer shows of his culture. An INNER ALLEGIANCE begins to polarize the consciousness.`
},
{
	sign: "Scorpio",
	degree: "29",
	title: "AN INDIAN SQUAW PLEADING TO THE CHIEF FOR THE LIVES OF HER CHILDREN.",
	keynote: `KEYNOTE: Love as a principle of redemption.`,
	description: `Here the soul is presented as a mother whose sons (i.e. her active energies) have become disruptive forces in the collective life of the tribe. She seeks to counteract the karma of their misdeeds through her love and implorations. The soul is responsive to the experience of unity (the spiritual king or chief) but the energies of human nature often follow their self-seeking, divisive tendencies.

	This is the fourth symbol of the forty-eighth sequence. It presents us with the value of prayer. The principle of wholeness in man — the soul — acts to offset or attenuate the dictates of karma. In a religious sense, Mary, the Mother, is seen as the Mediatrix, in constant acts of INTERCESSION for the sake of waylaid individuals.`
},
{
	sign: "Scorpio",
	degree: "30",
	title: "CHILDREN IN HALLOWEEN COSTUMES INDULGE IN VARIOUS PRANKS.",
	keynote: `KEYNOTE: The periodic outlets society furnishes within traditional limits to still-immature energies.`,
	description: `In the symbol for the first degree of Scorpio we see individuals beginning to be involved in the collective life of a large city. This leads them to a great diversity of experience which stimulates their sense of belonging to a vaster whole; or it may stimulate their rebellious instincts. Some of the latter in most cases cannot be completely overcome, but society has built in several ways of allowing them to operate under ritualistic procedures that are sufficiently safe to the collectivity. Wherever this symbol is found, the need for such outlets is shown to exist. But the rules of the game have to be obeyed.

	This is the last symbol referring to Scene Sixteen of the great ritual of cyclic being. It tells us that in any feeling experience of collective living and inter-human relationships one has to deal with unregenerated and centrifugal elements. These should be carefully managed. They can also be controlled by the power of mind – the Sagitarrian way. The symbol points to an imaginative RELIEF FROM TENSION.`
},
{
	sign: "Sagittarius",
	degree: "01",
	title: "RETIRED ARMY VETERANS GATHER TO REAWAKEN OLD MEMORIES.",
	keynote: `KEYNOTE: The will to reaffirm the value of the struggle upon which civilization and group-achievements are founded.`,
	description: `Two important factors are revealed in this symbol: the men who have come together are Army men, and they are linked by actions and a type of consciousness that have roots in a common past. What we call “civilization” is built by constant struggles against nature, for it seeks to wrench power from nature. This element of power is seen in its most obvious aspect in the military consciousness. Moreover, all civilization is built upon the accumulated products of the experiences of past generations of dedicated men who agree to follow rather rigid procedures of work. Veterans’ groups in all countries seek to rekindle in their members the old fire of well-fought battles; but the type of abstract or religious thinking normally related to the zodiacal sign, Sagittarius, also implies a special kind of “fire.” It is a fire that burns the “now” of natural living in order to build a greater “tomorrow.” It is future-oriented It aspires to produce a greater, wider civilization, even though it finds its roots in the harvest of mankind’s past. Comradeship and group activities are implied, but the togetherness is one of fighting spirits.  

	This is the first stage of the forty-ninth five-fold sequence of cyclic phases. The symbol should be understood in its widest and most basic meaning, not merely as the reunion of old comrades, but as referring to the very power implied in the process of civilization, as opposed to culture — thus to the PERPETUATION of the spirit of struggle for power.`
},
{
	sign: "Sagittarius",
	degree: "02",
	title: "WHITE-CAPPED WAVES DISPLAY THE POWER OF WIND OVER SEA.",
	keynote: `KEYNOTE: The mobilization of unconscious energies under the pressure of super-personal motives.`,
	description: `Wind and sea are in constant interplay, and the results of that interplay are inspiring and beautiful. In symbolism, the wind (pneuma is the early Greek word for "spirit") is associated with spiritual dynamism; the stirring of deep energies this dynamism produces obeys cosmic or super-personal rhythms, the power of which is irresistible.

	At this second stage of the forty-ninth five-fold sequence we have a picture which contrasts the powerful but beautiful storms of nature with the often gory and hysterical crises of a civilization which progresses through war. The picture presented speaks of SUBTILIZATION THROUGH RHYTHMIC INTENSITY.`
},
{
	sign: "Sagittarius",
	degree: "03",
	title: "TWO MEN PLAYING CHESS.",
	keynote: `KEYNOTE: The transcendent ritualization of conflict.`,
	description: `Essential to socio-cultural living is the transmutation of man's natural aggressiveness under most conditions of existence. Many rituals, sports and games have no other basic aim. In chess the complex types of energies which in their togetherness constitute a human person are symbolized by six kinds of pieces (king, queen, bishops, knights, rooks and pawns). The struggle between light and darkness (the Yang and Yin forces) is ritualized, ending in most cases with the checkmating of the king (the ego, the conscious self). In a dualistic world such a contest between polarized forces is omnipresent. The chess game trains men to be more objective, more careful, more aware of whole situations — and less impulsive and intent upon side issues.

	This third stage symbol deals with conflict, but at the level of group culture and psychological symbolization. It brings to the objective consciousness the basic realities in interpersonal INTERPLAY.`
},
{
	sign: "Sagittarius",
	degree: "04",
	title: "A LITTLE CHILD LEARNING TO WALK WITH THE ENCOURAGEMENT OF HIS PARENTS.",
	keynote: `KEYNOTE: The natural assistance of superior powers during crises of growth.`,
	description: `At an early stage in its development, every living organism must make an attempt to overcome the power of gravitation, or rather to learn to use it in order to fulfill the purpose of its life. This implies passing through a critical state of growth — growth in freedom, potency and individuality, inasmuch as "walking" always symbolizes self-induced progress. In such a crisis the individual is not left alone. Some more evolved Power and Intelligence watches, encourages and gives examples to be followed.

	As usual, this fourth stage symbol in the forty-ninth sequence gives a hint of technique. It presents a picture of the conditions under which a RESOLUTION OF CONFLICT can be ensured, whether at the organic, the personal or the super-personal level of unfoldment.`
},
{
	sign: "Sagittarius",
	degree: "05",
	title: "AN OLD OWL SITS ALONE ON THE BRANCH OF A LARGE TREE.",
	keynote: `KEYNOTE: A poised and wise approach to existence based on a clear perception of unconscious factors and their operation.`,
	description: `The owl has always been a symbol of wisdom, and its hooting call has evoked a rise to mysterious and hidden elements in life. The owl functions lucidly in the night aspect of existence. His eyes see what men normally fail to perceive. He represents that consciousness which is active where the processes of life normally escape the attention of the personal ego and its intellect.

	This is the last of the five symbols in the forty-ninth sequence. It suggests the possibility of developing a wisdom beyond tragedy, a peace and poise beyond conflict. One might speak here of TRANSLUCIDITY.`
},
{
	sign: "Sagittarius",
	degree: "06",
	title: "A GAME OF CRICKET.",
	keynote: `KEYNOTE: The development of skill in group-situations testing collective goals.`,
	description: `Any society is built on the interplay between groups of people, each group united by an at least temporary aim. The individual person within the group is assigned a particular role in the play; and definite rules have to be obeyed. The game teaches not only personal skill, but fairness and cooperation. Where this symbol is found, the value of making individual-will or ego-will subservient to collective cultural patterns is emphasized. Several symbols belonging to Scene Seventeen (Sagittarius) relate to games or group rituals, because these are "ab-stracted" from everyday social behavior and used as educative means to develop group-consciousness and an individual sense- of responsibility to the group.

	This is the first symbol of the fiftieth five-fold sequence. It refers to the importance of developing GROUP SOLIDARITY.`
},
{
	sign: "Sagittarius",
	degree: "07",
	title: "CUPID KNOCKS AT THE DOOR OF A HUMAN HEART.",
	keynote: `KEYNOTE: A stirring-up of individual longings for romantic love.`,
	description: `In contrast to the preceding, this symbol refers to what one might call a personal initiation through an ideal love. Far from being related to social value, ideal love tends to exalt individual characteristics in that it glorifies what seems able to fill poignant and often unconscious needs. Such a love is a projection of the anima or animus Images which in a sense complement the outer character of the one who loves. It is a subjective event which tends to bring to the lover a crisis or emotional chaos. Such a love often turns asocial if not antisocial and is blocked or frowned upon by society.

	This second stage symbol is in direct opposition to that of the "cricket game." Intensely romantic love knows no rules and ignores collective purpose or dictates of reason. Yet it may bring to the individual an intensity of feeling which no group togetherness can arouse, at least at the ordinary social level. What is implied is a challenge to EMOTIONAL REBIRTH.`
},
{
	sign: "Sagittarius",
	degree: "08",
	title: "WITHIN THE DEPTHS OF THE EARTH NEW ELEMENTS ARE BEING FORMED.",
	keynote: `KEYNOTE: The alchemical fire which both purifies and transforms the very substance of man's inner life.`,
	description: `Forces are at work in the deepest layers of the psyche which in their own way respond to the outer stimulation produced by a strong involvement in group ambitions and emotions, and even more by the powerful tensions and releases of love. An alchemical process goes on, usually unnoticed by the conscious ego, until it becomes obvious that a kind of mutation has taken place and a new level of awareness and of responses to life has been reached.

	At this third stage of the five-fold sequence we deal with both the basic rhythm of growth of the human being and the reaction to more individualized experiences which aroused the emotions. The very substance of the person's nature undergoes modifications, on the basis of which a new step may be taken. The symbol draws our attention to the inner changes. We have to become aware of them. What is implied is a kind of PSYCHIC GESTATION.`
},
{
	sign: "Sagittarius",
	degree: "09",
	title: "A MOTHER LEADS HER SMALL CHILD STEP BY STEP UP A STEEP STAIRWAY.",
	keynote: `KEYNOTE: The need in any social situation to assist the less evolved in their management of the problems which society requires its members to solve.`,
	description: `A staircase does not present a natural difficulty to a very young child. Man builds stairs and therefore is responsible for assisting the child to climb them step by step. Social and cultural living is not "natural." The child must first be taught by example, then helped along as he imitates as well as he can the grownup's behavior. Climbing stairs is only an illustration of a general process. Every generation must involve itself in teaching the next even the simplest skills needed for social existence.

	At the fourth stage of the preceding five-fold sequence we saw parents encouraging a little child to walk. Walking is a natural human function; climbing stairs is a skill made necessary by the building of several-storied houses — a product of civilization. What is implied here is SOCIAL CONCERN for the less evolved of society's members.`
},
{
	sign: "Sagittarius",
	degree: "10",
	title: "A THEATRICAL REPRESENTATION OF A GOLDEN-HAIRED GODDESS OF OPPORTUNITY.",
	keynote: `KEYNOTE: Society's efforts at dramatizing the greatness of what it offers to the ambitious person.`,
	description: `Civilization as a process demands the goading of individuals to spend their vital energies in the pursuit of achievements which, while fulfilling the individual's ambition and greed, nevertheless generate various forms of what we call "progress." This sequence of symbols mainly refers to the drive for advancement along "human, all too human" paths of growth.

	This is the last symbol of the fiftieth five-fold sequence. We see in it how socio-cultural forces operate by dramatization and propaganda. The result is all too often a process of FORCED GROWTH.`
},
{
	sign: "Sagittarius",
	degree: "11",
	title: "IN THE LEFT SECTION OF AN ARCHAIC TEMPLE, A LAMP BURNS IN A CONTAINER SHAPED LIKE A HUMAN BODY.",
	keynote: `KEYNOTE: The value of the "return to the body" advocated by modern thinkers in order to balance the stress on intellectuality and objective consciousness.`,
	description: `This sequence of five symbols confronts us with rather mysterious images, which nevertheless can be given very profound and important meanings for today. The original formulation of this symbol spoke of "physical enlightenment," but what seems to be implied, in contemporary terms, is the need to rely upon "the wisdom of the body" of which so much is made in sensitivity training and Gestalt psychotherapy. This refers to the process of deconditioning a consciousness that has become a prisoner of intellectual concepts with their total reliance on quantitative values, objectivity and conformity to the official patterns of our culture.

	This represents the first stage of a challenging process — the fifty-first sequence of five symbols. It stresses the importance, for many individuals, of RELYING UPON ORGANISMIC RESPONSES in meeting life's challenges.`
},
{
	sign: "Sagittarius",
	degree: "12",
	title: "A FLAG TURNS INTO AN EAGLE; THE EAGLE INTO A CHANTICLEER SALUTING THE DAWN.",
	keynote: `KEYNOTE: The spiritualization and promotion of great symbols of a New Age by minds sensitive to its precursory manifestations.`,
	description: `In the background of this strange allegory we can recognize the deep-seated belief that the American nation and its basic democratic institutions were constituted to be the cradle for a new step in human evolution. The "flag" is the abstract symbol of the nation; it becomes an "eagle" — another U.S. symbol — when the concept is made alive by bold and transcendent action. The eagle symbolizes spiritual will and the power to rise to the highest possible altitude of consciousness and purpose. Flying at such an altitude, the eagle is the first living creature to perceive the rising sun. Having perceived it, it heralds it — and by so doing is identified with the crowing chanticleer, who had convinced himself that his resonant cry was responsible for the rise of the sun and the coming of a new day.

	This second stage symbol contrasts with the first in that it is completely future-oriented. It speaks of "peak experiences" instead of the wisdom found in the organismic depth of the body- consciousness. It urges us to bring our noblest ideals to actual life through the power of the spiritual will. A Keyword might be ANNUNCIATION.`
},
{
	sign: "Sagittarius",
	degree: "13",
	title: "A WIDOW'S PAST BROUGHT TO LIGHT.",
	keynote: `KEYNOTE: The karma of past actions as it affects opportunities presented by a new cycle.`,
	description: `What the "widow's past" is remains obscure but the point is that even as a past cycle is closed — a phase of married life ends — the karma of whatever deeds or misdeeds this cycle witnessed will almost inevitably intrude into the new life period. Also, once a cycle of activity is concluded, much that was unclear or unconsciously motivated in the events it witnessed can now more easily come to the clear consciousness of the mind. It is possible to joyously herald the dawn from high above the actual stresses of existence (the preceding symbol), but the new day may be found loaded and darkened by the unfinished business of many a yesterday.

	This is the third stage of the fifty-first five-fold sequence. Mankind is "the widow," because our soon-to-be-concluded Piscean Age has buried most of the ideals it once revered and proclaimed. Yet the New Age will have to deal with many oppressive ghosts. This is a symbol of RETRIBUTION.`
},
{
	sign: "Sagittarius",
	degree: "14",
	title: "THE GREAT PYRAMID AND THE SPHINX.",
	keynote: `KEYNOTE: The enduring power of occult knowledge and of its quasi-divine Custodians, "Seed-men" of a previous cycle of existence.`,
	description: `The belief in an Original Tradition based on the perfect knowledge of the archetypal principles and forms which underlie all manifestations of life on this Earth (and by extension in the cosmos) is deeply rooted in man's consciousness. The Great Pyramid and the Sphinx are witnesses to such a Tradition, especially for the Western world. The symbol implies that such an archetypal knowledge remains the foundation upon which men's minds can still build solid and valid formulations, as new evolutionary developments are pending.
	
	This fourth stage symbol suggests that this occult knowledge and the traditional process of acquiring it is still available, and that by accepting their principles modern man can best meet the challenge of our present world crisis. The symbol, interpreted from a personal point of view, points to the greatness of a Soul's past achievements and the value of trying to re-evoke this past. What is revealed is THE POWER OF SPIRITUAL ANCESTRY.`
},
{
	sign: "Sagittarius",
	degree: "15",
	title: "THE GROUND HOG LOOKING FOR ITS SHADOW ON GROUND-HOG DAY, FEBRUARY 2.",
	keynote: `KEYNOTE: The value of anticipating new turns of events and ascertaining future prospects.`,
	description: `In our modern industrial society where policy changes and decisions often take several years to reach full actualization, it has become essential to plan with an eye on probable future developments. Such planning requires a study of past trends and the extrapolation of the results. What above all is implied in the symbol is a sensitivity to social or planetary rhythms, and the need to ensure at least relative safety by planning ahead.

	This is the last symbol in this fifty-first sequence. Something of the meanings of the first four is involved in the process it suggests. In its highest form the knowledge required is "eonic consciousness" — in modern terms the new science of PROSPECTIVE.`
},
{
	sign: "Sagittarius",
	degree: "16",
	title: "SEA GULLS FLY AROUND A SHIP IN EXPECTATION OF FOOD.",
	keynote: `KEYNOTE: The easily acquired dependence of psychic desires upon the stimulation of social circumstances.`,
	description: `Animals drawn into the circle of what human society produces find it easier to depend on man's handouts than to pursue their usually difficult search for sustenance. The sea gulls here symbolize the more wild and normally untamable energies of the human soul, but they too can develop a land of domesticated dependence upon the by-products of man's adventures within the realm of the unconscious (the sea). Natural instincts feed on the reactions, and often perversions, of the socially conditioned mind-ego.
	
	This is the first stage in the process represented by the fifty-second sequence of five symbols. It shows us how nature can readily become subservient to man's restless ambition to dominate the entire biosphere through an all-human planetary socioeconomic organization. This is a symbol of DEPENDENCE.`
},
{
	sign: "Sagittarius",
	degree: "17",
	title: "AN EASTER SUNRISE SERVICE DRAWS A LARGE CROWD.",
	keynote: `KEYNOTE: The culturally stimulated longing for group participation in a process of rebirth.`,
	description: `Since the very early days of man's evolution, religions and cults of various types have used the most significant periods in the year's cycle to dramatize the deepest longings of human nature, thus giving them direction, meaning, and through group action, a greater dynamic intensity. Easter is the Christian way of celebrating the coming of spring and the rebirth of life on this earth after the hardships of winter.

	At this second stage of the five-fold sequence we see, in contrast to the first, man discovering in nature's cycles great movements that stimulate his spiritual quest for the psychic and mental equivalent of solar light and warmth. The obvious Keyword here is REBIRTH.`
},
{
	sign: "Sagittarius",
	degree: "18",
	title: "CHILDREN PLAYING ON THE BEACH, THEIR HEADS PROTECTED BY SUNBONNETS.",
	keynote: `KEYNOTE: The protection society affords to as yet immature individuals as they begin to deal with the powerful energies of their unconscious nature.`,
	description: `What we call "culture" is an attempt to limit and define the areas of consciousness and interpersonal or group behavior within which growth and exploration into super-physical realms can be considered safe and sound. Sun and sea are powerful forces; they can kill as well as illumine and inspire, as can various kinds of forces within man's unconscious. The cultural and religious institutions of society aim to act as protective agencies, especially for the youth. Overprotection and hypocritical behavior by supposed grownups defeat this purpose, and today we are witnessing an at least partially healthy rebellion against the protective paternalism of social institutions. This, however, does lead to many a symbolic "sunstroke."

	This is the third symbol in the fifty-second five-fold sequence. It brings to us a realization of the value of PROTECTIVENESS, yet also evokes the negative possibility that too much protection may be unhealthy and defeat its purpose.`
},
{
	sign: "Sagittarius",
	degree: "19",
	title: "PELICANS MENACED BY THE BEHAVIOR AND REFUSE OF MEN SEEK SAFER AREAS FOR BRINGING UP THEIR YOUNG.",
	keynote: `KEYNOTE: The need for people concerned with the future to discover a new way of living and more wholesome surroundings.`,
	description: `The evident reason for using "pelicans" at this stage of the cyclic process is that tradition tells us that these birds are so concerned with their young that they give their own blood and flesh to feed their progeny. Whether this is fact or symbol, the meaning of this picture refers to a situation that lately has acquired great urgency. Our technological society is polluting not only our global environment, but the mind and feeling-responses of new generations as well. The search for a new way of life is seen by many people to be imperative.

	In this fourth symbol of the fifty-second sequence we are told that the race's SURVIVAL has become a matter of extreme importance. Whole animal species may be destroyed by our civilization; mankind itself is in danger. Going to distant planets is hardly the answer. A generation may have to sacrifice itself for the sake of its descendants.`
},
{
	sign: "Sagittarius",
	degree: "20",
	title: "IN AN OLD-FASHIONED NORTHERN VILLAGE MEN CUT THE ICE OF A FROZEN POND FOR USE DURING THE SUMMER.",
	keynote: `KEYNOTE: The foresighted use of natural resources to supply future needs.`,
	description: `At the close of this series of symbols we again see a reference to the relationship between man and nature. Man’s ingenuity and foresight make it possible for him to plan for the future in terns of his knowledge of the seasonal rhythm of cold and heat and, by implication, of even larger cycles of change. Quiet and relaxation may have to be sacrificed, and some hardships endured, in order that another type of problem, which may involve survival though proper feeding, may be met at some later time.
	
	This is the fifth and last phase in the fifty second section of the cycle. It stresses the value of actively planning for future need, and of foresight based on the knowledge of cyclic processes. Keywords: ASSURING SUPPLY.`
},
{
	sign: "Sagittarius",
	degree: "21",
	title: "A CHILD AND A DOG WEARING BORROWED EYEGLASSES.",
	keynote: `KEYNOTE: The use of imagination and make-believe in anticipating higher stages of development.`,
	description: `This rather peculiar symbol seems to imply here that by imitating features belonging to a level of consciousness as yet unreachable, the process of growth may be accelerated. Eyeglasses symbolize intellectual development; the chiefs of primitive tribes in some instances have sought to impress their people by wearing spectacles without glass, or western hats – simply because these objects seemed characteristic of a race of superior people. This is similar to the process of growth by identification with a ‘Master’ or guru. In a sense it is mere pretending or make-believe, yet wearing the ‘mask’ of a god the medicine man at the time becomes for all practical purposes the incarnation of the god. Growth is always a hierachical process, even if the growing entity is not aware of it.

	This is the first of five symbols constituting the fifty-third sequence. It suggests the value of LEARNING THROUGH IMITATION.`
},
{
	sign: "Sagittarius",
	degree: "22",
	title: "A CHINESE LAUNDRY.",
	keynote: `KEYNOTE: Making use of one’s special racial-cultural background in order to survive and prosper in an alien environment`,
	description: `There are many life situations in which because on one’s ancestral or personal background, or their special interests, and individual finds themselves separated from the people in the midst of whom they have to live. Yet they often can use this background a valuable foundation for smooth operation and acceptance by the alien environment, without losing their own natural character.

	This second stage symbol stands in contrast to the one for the first stage. There is no longer a question of imitating the ways of a superior group, but instead of maintaining one’s own integrity in situations which neither give value for, not favour what one basically is. What is asked here is SELF-CONTAINMENT…and good humour!`
},
{
	sign: "Sagittarius",
	degree: "23",
	title: "A GROUP OF IMMIGRANTS AS THEY FULFILL THE REQUIRMENTS OF ENTRANCE INTO THE NEW COUNTRY.",
	keynote: `KEYNOTE: Consciously accepting the ways of a new stage of experience, in readiness for the opportunities it will present.`,
	description: `As we pass any threshold leading to a new realm of existence we have to meet certain requirements and the necessity to adjust to new ways of life – in action, thought and feeling. At times this may seem an ordeal but it is inevitable. Everything that will follow depends largely on how we cross this threshold, and on the spirit in which we meet unfamiliar and perhaps shocking experiences.

	At this third stage of the fifty-third five-fold sequence we face a combination of the two preceding symbols. We find ourselves in a period of TRANSITION. We have to imitate, yet retain our inner integrity.`
},
{
	sign: "Sagittarius",
	degree: "24",
	title: "A BLUEBIRD PERCHED ON THE GATE OF A COTTAGE.",
	keynote: `KEYNOTE: The reward which meets every effort at integrating into a social environment for those who remain true to their own selves.`,
	description: `The bluebird is a symbol of happiness, but also it refers to what one might call a spiritually oriented mind - to which the color blue relates, especially when a 'bird' is mentioned. A cottage is normally a part of a community, and the implication is that its inhabitant are well-adapted, either to the life of the community, or to their’ more or less isolated togetherness.

	This is a fourth stage symbol, and it suggests that the essential technique for successful living is the development of a consciousness in which peace and happiness dwell. There is also a hint that GOOD FORTUNE is going to bless your life.`
},
{
	sign: "Sagittarius",
	degree: "25",
	title: "A CHUBBY BOY ON A HOBBY HORSE.",
	keynote: `KEYNOTE: The anticipatory enjoyment of powers one can only as yet dream of utilizing.`,
	description: `The horse has always been a symbol of power and, in many instances, of sexual energy. Until very recently the horse gave people a greater possibility of conquering more space and what that space contained. Mounted on his hobby horse and experiencing the to-and-frow rhythm of its motion, the well-fed boy unconsciously, and perhaps nowadays half-consciously, may anticipate the rhythm of the sexual act. In a sense it is also a kind of make-believe and growth through the imagination, but here – in contrast to what was shown in the symbol for Phase 261 – the imagination is active at the organic body level. There is something of an initiation in the play. 

	This is the last symbol of the fifty-third sequence of five. It ends in a mood of play, but it is a play filled with cultural expectation, unconscious though this expectation may be. We see here the FORSHADOWING of the mature experience of man/womanhood.  `
},
{
	sign: "Sagittarius",
	degree: "26",
	title: "A FLAG BEARER IN A BATTLE.",
	keynote: `KEYNOTE: The nobly accepted subservience of the individual to collective values and goals.`,
	description: `A flag symbolizes an organized collectivity of human beings, a nation or even a social class. In the old-fashioned type of battle, whoever carries the flag has to feel himself the representative of the integrity and unity of his group. His personal life and his welfare should therefore be totally submerged in and identified with the welfare of the "greater Whole" of which every person can act as a conscious and responsible agent for mankind. In substance, the symbol asks: "Are you ready to assume this role!"

	This first stage of the fifty-fourth five-fold sequence presents a picture of what social consciousness can mean in its highest implications. The flag-bearer is unarmed, defensless; yet he can be the rallying point for the total effort of a large collectivity. This is a symbol of CONSECRATION TO AN IDEAL.`
},
{
	sign: "Sagittarius",
	degree: "27",
	title: "A SCULPTOR AT HIS WORK.",
	keynote: `KEYNOTE: The ability to project one's vision upon and to give form to materials.`,
	description: `At this stage we see the individual creatively expressing his own particular individuality. He takes the materials available in his social-geographical environment and shapes them so they reveal to other people something of his inner life and purpose.

	This second phase in the fifty-fourth sequence is, as usual, in contrast to the first. The "flag bearer" symbolizes the selfless representative of a collective tradition or of national unity; the "sculptor," on the contrary, represents man as a creative individual intent on making his mark upon society. This is a symbol of man's capacity to transform raw materials according to his personal vision — thus a symbol of SELF-PROJECTION INTO A WORK.`
},
{
	sign: "Sagittarius",
	degree: "28",
	title: "AN OLD BRIDGE OVER A BEAUTIFUL STREAM IS STILL IN CONSTANT USE.",
	keynote: `KEYNOTE: The enduring elements in a society which reveal its ability to significantly link the genius of its individuals to the everyday needs of the collectivity.`,
	description: `This symbol brings together, as it were, the essential values implied in the two preceding ones. The mastery over material factors of a few imaginative and trained individuals enables their community to remain well-integrated and able to function easily in the best possible environment. The work of these sculptor-engineers allows their people to develop a relatively permanent culture. A tradition is built which enables men to link their outer nature with the highest vision their leaders can conceive and objectively demonstrate.

	This third symbol of the fifty-fourth sequence also suggests the way in which the works of man can blend harmoniously with natural environment in producing beautiful and enduring shapes of profound meaning. Reacting against the ugliness of our commercial and chaotic cities and highways, today we tend to long for "wilderness." But the combination of natural beauty and human skill and imagination is the true ideal to strive for. As Keywords we might use the title of an excellent book by the architect Claude Bragdon: THE BEAUTIFUL NECESSITY.`
},
{
	sign: "Sagittarius",
	degree: "29",
	title: "A FAT BOY MOWING THE LAWN OF HIS HOUSE ON AN ELEGANT SUBURBAN STREET.",
	keynote: `KEYNOTE: The need to attend to everyday tasks which both ensure social worth or respectability, and benefit one's constitution.`,
	description: `This rather trivial picture becomes quite significant if related to the preceding three symbols. It brings down to a very concrete and commonplace level what the "flag bearer" and the "sculptor" symbols have presented. A well-attended front lawn is a symbol of the homeowner's concern for his social position, and of his desire to give beautiful form to the growth of natural forces, thus revealing his appreciation of order and esthetic values. The "fat boy" suggests that constructive working habits are needed to compensate for self-indulgence in the amenities of social living.

	This fourth stage symbol speaks of one of the commonplace technical imperatives which face an individual belonging to a social elite. It reveals another phase in the cycle relationship between the individual and the community, and the need to maintain SOCIAL RESPECTABILITY.`
},
{
	sign: "Sagittarius",
	degree: "30",
	title: "THE POPE, BLESSING THE FAITHFUL.",
	keynote: `KEYNOTE: The need to pay homage to traditional values upon which the Invisible Community of the spirit is built.`,
	description: `with a long tradition reflects, as well as having produced century after century, an invisible spiritual Community. The "flag bearer" has now become the "Pope," who assumes the role of God's representative on earth. It is a role, but culture is based on embodying great Images and deeply moving symbols in physical reality. The symbol asks of the individual: "Are you willing to live a transpersonal life as a symbol?" This is the final and supreme statement of that section of the cycle of the year represented by Sagittarius.

	This concludes Scene Eighteen. A collectivity of human beings is seen having "transferred" their sense of spiritual value to a man who has become an incarnation of their common ideal. Keywords: PERSONALIZED WORSHIP. It can be a blessing or in some cases, a curse.`
},
{
	sign: "Capricorn",
	degree: "01",
	title: "AN INDIAN CHIEF CLAIMS POWER FROM THE ASSEMBLED TRIBE.",
	keynote: `KEYNOTE: The power and responsibility implied in any claim for leadership.`,
	description: `The religious ideal implied in the preceding symbol has now materialized or crystallized into sheer power — the power to lead the community and to ensure its welfare or even its physical survival. The energies released through group cooperation (Libra), deepened and emotionally experienced as forces of great potency (Scorpio), and given meaning and conscious purpose (Sagittarius) are now stabilized and hierarchized. The power of the group is turned into a measurable and carefully managed "capital." The words "chief" and "capital" come from the same Latin word, caput, meaning "head." A time comes in many lives when the individual finds himself placed in a situation that allows him to assume power over his comrades, however limited this power may be. Is he ready to do this effectively and responsibly? This is the supreme test of man in society. It complements its polar opposite (summer solstice degree), which refers to the acceptance by the individual of a new kind of allegiance as a foundation for the integration of his mature personality. Such a foundation may, but need not, refer to establishing a home.

	This represents the first stage in a five-fold process — the fifty-fifth sequence of five symbols. It refers to the capacity latent in every individual to claim and assume AUTHORITY in a vital group-situation.`
},
{
	sign: "Capricorn",
	degree: "02",
	title: "THREE ROSE WINDOWS IN A GOTHIC CHURCH, ONE DAMAGED BY WAR.",
	keynote: `KEYNOTE: The necessary realization by any individual making a violent use of collective power that it will lead to the inevitable destruction of some of the values ensuring group-integration.`,
	description: `It seems obvious that the interpretation of this symbol should refer to the disruptive consequences of war. The "chief" who claimed power from his tribe in order to lead or save it must reckon with the consequences of a too-impulsive use of this power in terms of violence. The integration he seeks to maintain or enhance may be partially destroyed if in his ambition he yearns to be the victorious war leader glorified by his people. A "rose window" is not absolutely essential to a cathedral, yet it symbolizes that through which the "light of the Spirit" enters into the edifice. Man's soul is said to be three-fold. Which part of man's inner trinity of principles tends to be destroyed by the use of violence? Evidently the principle of love and compassion.

	This second stage symbol is in contrast to the preceding one because it opposes the power to destroy to the power to build. The "capital" of group-energies is partially squandered in armaments and death. WASTE is the opposite of group-integration.`
},
{
	sign: "Capricorn",
	degree: "03",
	title: "A HUMAN SOUL, IN ITS EAGERNESS FOR NEW EXPERIENCES, SEEKS EMBODIMENT.",
	keynote: `KEYNOTE: A powerful yearning for whatever will increase the scope and depth of one's contacts with other living beings.  `,
	description: `One wonders what the clairvoyant "saw" and said to the recorder of this symbol. How did she visualize a "human soul" or, as Marc Edmund Jones recorded it, its being "receptive to growth and understanding"? What is implied in the position of this symbol seems to be the strong drive in every human consciousness or will toward new experiences, whether they are constructive or destructive. Man may grow and gain understanding and wisdom through both types. Yet the yearning needs to be tempered by an instinctive evaluation of the end results of the experience.

	This is the third phase of the fifty-fifth five-fold process. It shows us what is behind all uses of power, anabolic or catabolic: a strong DESIRE TO PROVE ONESELF.`
},
{
	sign: "Capricorn",
	degree: "04",
	title: "A GROUP OF PEOPLE OUTFITTING A LARGE CANOE AT THE START OF A JOURNEY BY WATER.",
	keynote: `KEYNOTE: The ability to use natural resources and basic skills in order to achieve a group-purpose.`,
	description: `As this scene was recorded in the original version only in imprecise terms, it seems merely to indicate the start of a journey undertaken by a cohesive group of people, who perhaps together have built this large canoe. Thus we see here a common enterprise which may be an answer to the need for a change of locality. A social group more strongly than ever reveals its homogeneity and common will when it decides to move away from its familiar habitat. The zodiacal sign Capricorn brings this common will to a focus in concrete actions. It does so in terms of socio-political expediency and under a definite type of executive direction, even though the decisions are arrived at by common consent.

	As this is the fourth symbol in the fifty-fifth five-fold sequence, we find in it a hint of how to do something concrete. The "canoe" may also have a special technical meaning, as it uses water in order to move. A common feeling-response to a specific situation may be implied. The main emphasis is nevertheless on GROUP-ACTIVITY in circumstances implying a need for change.`
},
{
	sign: "Capricorn",
	degree: "05",
	title: "INDIANS ON THE WARPATH, WHILE SOME MEN ROW A WELL-FILLED CANOE, OTHERS IN IT PERFORM A WAR DANCE.",
	keynote: `KEYNOTE: The mobilization of physical and emotional energies in a spirit of conquest.`,
	description: `War is often undertaken mainly to mobilize the common will and avoid individualistic disintegration. The "Indian chief" in the symbol for Capricorn 1° may find it convenient or necessary to arouse the war spirit — perhaps under a very slight provocation — in order to more firmly establish his authority. The scene presents an extremely dynamic situation. The group (or the nation) affirms its solidarity and unity of purpose by taking the offensive. The group-life demands constant activity and challenges in order to remain healthy.

	This is the last symbol of the fifty-fifth sequence. It suggests that AGGRESSIVENESS may be a necessary ingredient in the activation of the potential of growth inherent in any social group.`
},
{
	sign: "Capricorn",
	degree: "06",
	title: "TEN LOGS LIE UNDER AN ARCHWAY LEADING TO DARKER WOODS.",
	keynote: `KEYNOTE: The need to complete any undertaking before seeking entrance to whatever is to be found beyond.`,
	description: `Number 10 is a symbol of completion; it symbolizes even more the revelation of a new series of activities just ahead. Yet unless the concluded series is brought to some degree of fulfillment, nothing truly significant is likely to be accomplished by a restless reaching out toward the as-yet-unknown. Number 10 is a symbol of germination, but the seed (Number 9) must have matured well. No natural process can be accelerated safely beyond certain limits.

	This represents the first stage in the fifty-sixth five-fold sequence. It establishes a foundation for what will follow. Here man reaches a THRESHOLD in which he may have to pause in order to safeguard his further advance.`
},
{
	sign: "Capricorn",
	degree: "07",
	title: "A VEILED PROPHET SPEAKS, SEIZED BY THE POWER OF A GOD.",
	keynote: `KEYNOTE: The ability to act as a mouthpiece for the revelation of a transcendent will and truth determining future action.`,
	description: `Here we witness the deepest manifestation of that Power which operates within all relatively permanent social units, especially at the level of tribal organization. A tribe is a bio-psychic whole (or organism) integrated by a collective superphysical Power, the god of the tribe. In the Hebrew tradition this god is YHWH (Yahweh-Jehovah); in earlier tribes it may have been a deified more or less mythical "Great Ancestor." All these tribal gods are local manifestations of the very power of "Life" within the earth's biosphere. It is this deified Power which psychically "seized" especially sensitive or religiously trained men or women, who became Its mouthpiece — prophets, seers, oracles. That Power operates in our days as well, but in different ways because of the individualization and intellectualization of modern man's consciousness. It binds together and helps to maintain the integration of organized social collectivities. It guides their development by releasing and focusing through especially open persons the visionary expectation of developments about to occur.

	At this second stage of the fifty-sixth sub-cycle the future interacts with the present to release it from the inertial power of the past. Thus this symbol stands in contrast to the preceding one. At the threshold of tomorrow man is allowed to have a vision or revelation of the essential elements of the as-yet-unknown next step in evolution. The key word is MEDIATORSHIP.`
},
{
	sign: "Capricorn",
	degree: "08",
	title: "IN A SUN-LIT HOME DOMESTICATED BIRDS SING JOYOUSLY.",
	keynote: `KEYNOTE: The wholesome happiness which subservience to the ideals and patterns of a well-established culture brings to those who accept them unreservedly.`,
	description: `In various ways this section of the cyclic process brings to us images glorifying the power and benefits which a steady and well-integrated society brings to its members. Saturn rules Capricorn; Saturn was the ruler of the Golden Age before he became a symbol of binding limitations. He who accepts willingly or — even better — takes for granted the value of these limitations can lead a serene and happy existence, whatever his social status.

	The third stage of this five-fold sequence suggests to us how we can enjoy our life condition by allowing the spiritual values it embodies to fill our consciousness. In every condition provided by a healthy culture — which hardly refers to our present chaotic world — human beings can find ENJOYMENT in the roles they are born to play.`
},
{
	sign: "Capricorn",
	degree: "09",
	title: "AN ANGEL CARRYING A HARP.",
	keynote: `KEYNOTE: The revelation of the spiritual meaning and purpose at the core of any life situation.`,
	description: `This picture simply says that "heaven is within us." All we have to do is to be open and listen to the total harmony of life, a harmony in which we play a part that is necessary to the completeness and meaning of the whole. In order to do this we have to surrender our separative ego- consciousness and flow with the universal current which, to the religiously minded person, is the Will of God.

	This is the fourth symbol of the series. The technique it implies is that of ATTUNEMENT to the rhythm of universal life. Angels are to be considered personalizations of various aspects of this life, and totally subservient to its rhythms and purposes.`
},
{
	sign: "Capricorn",
	degree: "10",
	title: "AN ALBATROSS FEEDING FROM THE HAND OF A SAILOR.",
	keynote: `KEYNOTE: The overcoming of fear and its rewards.`,
	description: `The man who radiates perfect harmlessness can call the wildest creatures to him and can establish with them a partnership based on mutual respect and understanding. Every living entity plays a role in the world's ritual of existence; beyond these specific roles, which too often separate one entity from another, the communion of love and compassion can bring together the most disparate lives.

	At this last stage of the fifty-sixth sequence we are presented with a picture extending the ideal of peace and happiness through culture so it now includes all living organisms on this planet. The power of such a culture of harmlessness and compassion generates TRUST everywhere.`
},
{
	sign: "Capricorn",
	degree: "11",
	title: "A LARGE GROUP OF PHEASANT ON A PRIVATE ESTATE.",
	keynote: `KEYNOTE: The refinement and propagation of aristocratic values by means of which man participates in the evolution of life toward ever more per feet forms of existence.`,
	description: `All life implies a hierarchy of values, from the crude to the subtle, from the rough and the ugly to the beautiful. By the use of biological techniques, man is able to develop new species, or at least to greatly improve those found in the wild. This ability is at the root of all cultural processes. Wilderness is turned into the gardens of an aristocracy having the leisure, taste and money to produce or encourage the creation of beautiful forms. This is what the social process produces in its highest aspect.
	
	The first symbol of the fifty-seventh five-fold sequence shows us how man can cooperate with nature in creating beauty and elegance by capitalizing on skill and opportunity. The Keyword is ARISTOCRACY.`
},
{
	sign: "Capricorn",
	degree: "12",
	title: "AN ILLUSTRATED LECTURE ON NATURAL SCIENCE REVEALS LITTLE-KNOWN ASPECTS OF LIFE.",
	keynote: `KEYNOTE: The ability to explore unfamiliar realms and discover the laws underlying the complex processes of nature.`,
	description: `The aristocratic garden of the preceding phase has become the laboratory and lecture hall of a modern college. The emphasis here is on the acquisition of extensive knowledge, the satisfaction of intellectual curiosity. Nevertheless, there is also an aristocracy of science: this is the modern type. Its use of acquired knowledge can pose as many problems as the use of hereditary aristocratic wealth. But it is man's essential function to become fully conscious of all life forms and processes on this earth. Mankind is the conscious mind of the planet.

	At this second stage the intellectual search for empirical knowledge contrasts with the display attendant to the wealth and culture of an elite. Civilization is founded on an ever-extended capitalization on knowledge and use of technology. It features EXPLOITATION preeminently at all levels.`
},
{
	sign: "Capricorn",
	degree: "13",
	title: "A FIRE WORSHIPER MEDITATES ON THE ULTIMATE REALITIES OF EXISTENCE.",
	keynote: `KEYNOTE: The subjective quest for ultimates beyond the interplay of life and death processes.`,
	description: `Beyond cultural enjoyment and the passion for accumulation of often-unusable data of sense knowledge stands the willful and determined "adventure in consciousness" of the occultist, the yogi, the mystic. The mystery of fire has always captured man's imagination because it is the mystery of all transformations wrapped in the enigma of death. In times when collective, perhaps total, death could be in store for mankind, the process of subjective meditation is fascinating an ever-greater number of people.

	This is the third symbol in the fifty-seventh sequence. It brings us to a stage beyond life itself. Are we ready to take this step which the masters of yoga claim to have taken: to experience death and return to the same body? Are we ready to demonstrate man's WILL TO TRANSCENDENCE?`
},
{
	sign: "Capricorn",
	degree: "14",
	title: "AN ANCIENT BAS-RELIEF CARVED IN GRANITE REMAINS A WITNESS TO A LONG-FORGOTTEN CULTURE.",
	keynote: `KEYNOTE: The will to unearth, in our culture as well as in any culture, what has permanent value, and to let go of nonessentials.`,
	description: `At a time when in nearly every land men are questioning and challenging the validity of traditional beliefs and customary attitudes, it becomes necessary to separate permanent values and great principles or symbols from the many individual habits and the socio-political developments which more often than not have perverted or even negated the original ideals of the culture. We must strive to free these ideals from the wild growth of personal and class selfishness, from the greed and ambition so prevalent in human nature, and learn to appreciate the excellence of what is the immortal seed-foundation, as well as the spiritual harvest, of any culture — and by extension of every sustained and complete work produced by a man's indomitable effort to achieve creative perfection.

	In this fourth stage symbol we are shown the procedure which enables us to gain a deep and thorough appreciation of socio-cultural processes in their most enduring forms. What is needed is a penetrating and courageous insight founded upon a valid HISTORICAL PERSPECTIVE. This applies to the past of an individual's life as well as to the history of a nation or a group.`
},
{
	sign: "Capricorn",
	degree: "15",
	title: "IN A HOSPITAL, THE CHILDREN'S WARD IS FILLED WITH TOYS.",
	keynote: `KEYNOTE: The responsibility of society to ensure the welfare and total health of the new generation.`,
	description: `The socio-cultural process must look to the future as well as to the past. It has created conditions which may harm the children who will carry forward its work, and it must try to repair these negative conditions through love as well as through physical care. In personal life, the individual should take great care of his fresh intuitions and his dreams of future growth. They are often fragile developments which the pressures of everyday life can easily distort or destroy.

	This is the last stage of Scene Nineteen, which began with a powerful claim for socio-political power. The exercise of such a power can indeed produce social conditions which endanger the healthy and spiritual unfoldment of a community, and especially of its children. There is therefore constant need for TENDER CARE as well as skill to neutralize the destructive tensions of social living.`
},
{
	sign: "Capricorn",
	degree: "16",
	title: "SCHOOL GROUNDS FILLED WITH BOYS AND GIRLS IN GYMNASIUM SUITS.",
	keynote: `KEYNOTE: The need for physical activity and play, especially in adolescence.`,
	description: `Society has learned that a balanced combination of intellectual study and physical activity is necessary for the harmonious development of the human personality. Adults often forget this under the pressure of money-making and other duties, and this symbol reminds us of it.

	This is the first stage of the fifty-eighth five-fold sequence which begins Scene Twenty of the cyclic ritual. It shows how we normally depend upon physical stimulation and EXERCISE for the maintenance of our health, and therefore of an equally healthy society.`
},
{
	sign: "Capricorn",
	degree: "17",
	title: "A REPRESSED WOMAN FINDS A PSYCHOLOGICAL RELEASE IN NUDISM.",
	keynote: `KEYNOTE: The escape from bondage to social inhibitions and a reliance upon the wisdom of the body.`,
	description: `Under the pressure of religions that have created a sharp and unwholesome division between soul and body, society has produced strict codes of values regarding the play of natural instincts, and has glorified them under the name of "decency" and "modesty." The growing trend toward nudism — which of course has nothing to do with the "pornographic" display of one's body — is a welcome protest against the depressing and neurosis-generating puritanism of the past. Men and women are demanding a psychologically as well as physically healthful freedom of the body as a means of overcoming the hypocrisy and constrictions of social behavior.

	In this second stage symbol we see how our society has been able to repress and distort the natural activity of the human body and its sensitivity to the elements. Thus a contrast is established between healthy youth at play and the neurotic subservience to a socio-religious tradition. The symbol is a call for RELEASE FROM INHIBITIONS.`
},
{
	sign: "Capricorn",
	degree: "18",
	title: "THE UNION JACK FLAG FLIES FROM A BRITISH WARSHIP.",
	keynote: `KEYNOTE: The protection afforded to individuals and groups by powerful institutions in charge of maintaining order.`,
	description: `This symbol reflects conditions prevailing in the past when Great Britain's fleet was policing the seas under the international principle of the freedom of the seas. Times have changed, but the concept remains valid. Power is required to maintain social order and relatively peaceful interpersonal as well as international relationships. Alas, this power can easily be misused under the pretext of preserving "law and order." Justice and compassion must balance social power, and especially the power of privileged groups. Where this symbol appears, the need for protection may be in evidence — or it may be a warning against using power for selfish advantage.

	This is the third symbol in the fifty-eighth five-fold sequence. It brings to us a realization of the ambivalence of POLITICAL POWER, its value and its dangers.`
},
{
	sign: "Capricorn",
	degree: "19",
	title: "A FIVE-YEAR-OLD CHILD CARRYING A BAG FILLED WITH GROCERIES.",
	keynote: `KEYNOTE: Rising to the occasion when asked to assume social responsibilities ahead of one's normal development.`,
	description: `What seems to be implied at this stage of the cyclic process is the value of early conditioning in teaching one how to fulfill the responsibilities of everyday life in our modern society. This twentieth scene of the complete process has been entitled "Group performance," and today it is evident that Children at an early age are expected to assume a family role which at times will strain their natural capacities. This is part of the accelerating pace of our technological society.

	This fourth stage symbol evokes the possibility of meeting a certain type of social opportunity which normally may seem premature. A pattern of ACCELERATED GROWTH can thus be established, with both positive and negative aspects. Rushing ahead of one's natural development may be damaging; yet we are living in a particularly dynamic period of man's evolution.`
},
{
	sign: "Capricorn",
	degree: "20",
	title: "A HIDDEN CHOIR IS SINGING DURING A RELIGIOUS SERVICE.",
	keynote: `KEYNOTE: The fulfillment of the individual's creative function through his participation in a group performance consecrated to a transcendent realization of unity.`,
	description: `In great cathedrals and other religious edifices the choir is normally hidden behind the altar or above the nave. It symbolizes thus more perfectly the supernal harmony of "heaven" — or the music of the spheres. The ideal of social participation is exalted to its highest manifestation, for the choir also represents the multifaceted and polyphonic unity of the community in its transcendent state of perfect harmony. Within this harmony the individual who has overcome his egocentric separativeness and developed his higher consciousness finds fulfillment in super-personal togetherness.

	This is the fifth and last symbol of this fifty-eighth sequence. It presents us with the purest form of group-harmony, the most basic yet most difficult fulfillment of the social state. At the level of the individual person this "hidden choir" would refer to the polyphonic integration of all faculties in their most spiritual manifestations: the ideal of PLENITUDE of being.`
},
{
	sign: "Capricorn",
	degree: "21",
	title: "A RELAY RACE.",
	keynote: `KEYNOTE: The value of competition in developing group-consciousness.`,
	description: `Here we are no longer dealing with competition between individuals, but with competition between groups of individuals who take turns successively in order to maximize the group effort and the possibility of outstanding results. The whole of civilization is a vast kind of relay race in which groups of people and generations carry the torch of what we call "progress." Major achievements result from the sum total of human strivings.

	This first symbol of the fifty-ninth sequence stresses one especially dynamic aspect of "group performance." Wherever this symbol appears, it emphasizes the value of group cooperation and of necessary give-and-take. One must seek to relate and adjust one's strength to the challenge presented by competitors in DYNAMIC INTERCHANGE.`
},
{
	sign: "Capricorn",
	degree: "22",
	title: "BY ACCEPTING DEFEAT GRACEFULLY, A GENERAL REVEALS NOBILITY OF CHARACTER.",
	keynote: `KEYNOTE: The realization that one may grow through defeat as well as, and perhaps more than, through success.`,
	description: `While the preceding symbol referred to the drive toward success in culturally organized collective endeavors, this one presents us with the possibility of turning apparent external defeat into an inner spiritual achievement. We have recently seen how totally vanquished nations (Germany and Japan) have leaped forward and achieved great economic success. Much depends on the quality of the will and the inner integrity of the person.

	At this second stage we find what seems to be a paradox, but the spiritual life is always paradoxical. The great sinner can become the most renowned saint, and a medieval Pope a criminal. What matters most always is INNER STRENGTH.`
},
{
	sign: "Capricorn",
	degree: "23",
	title: "A SOLDIER RECEIVING TWO AWARDS FOR BRAVERY IN COMBAT.",
	keynote: `KEYNOTE: The reward offered by society for the fulfillment of individual responsibility.`,
	description: `The fact that "two" awards are emphasized makes us believe that this may refer subtly to the recognition by the community that, whether he succeeded or failed, an individual who discharged his duty nobly under unusual circumstances is entitled to the respect and appreciation of the collectivity he served so well. What is implied here is a constant give-and-take between society and the individual person. Each one should be able to trust the other.

	This third symbol of the fifty-ninth five-fold sequence extracts, as it were, a common element from the two preceding scenes. The Keyword here is RECOMPENSE, i.e. a compensation for a well-done performance — a balancing of accounts.`
},
{
	sign: "Capricorn",
	degree: "24",
	title: "A WOMAN ENTERING A CONVENT.",
	keynote: `KEYNOTE: Total commitment to a transcendent goal.`,
	description: `A convent is a place made available by a community which believes in the possibility of reaching a world-transcending state of consciousness. It is made available to individuals who may be variously motivated. To some it is an escape from the intolerable pressures of family and society; to others it represents the possibility of pursuing in peace a spiritual ideal to which the whole being aspires and is totally dedicated. The important point, in this phase of the cyclic process, is that the existence of a convent expresses another aspect of the relationship between the society (its religion and culture) and the individual. In the preceding symbol society rewarded the individual for a noble performance in its service; here society accepts the fact that beyond its daily normal patterns of behavior and commitments, another way of life exists which, in a higher sense, also has social value. In the old Hindu society dominated by a rigid caste system, the ideal embodied in the sannyasi — the wandering holy man or yogi meditating in a forest or a cave, who had entirely given up all that caste implied — was seen to be the very culmination of the social process.

	In this fourth stage symbol we see the paradoxical nature of the social process operating more strongly than ever. This derives from the fact that man's nature contains in seed the possibility of overcoming and transcending itself in acts of complete denials and of surrender to a "higher" Law or quality of being. All spiritual techniques are indeed paradoxical. Rigid discipline conditions pure inner freedom. The final goal is the attainment of TRANSCENDENT SECURITY.`
},
{
	sign: "Capricorn",
	degree: "25",
	title: "A STORE FILLED WITH PRECIOUS ORIENTAL RUGS.",
	keynote: `KEYNOTE: The use of cultural and artistic processes as means to enhance personal comfort and appreciation.`,
	description: `Corning after the preceding symbol this one brings us back to the material, yet esthetic, aspect of the benefits a society can bring its members. A "rug" always implied to some extent something on which a person stands or sits. It is a foundation for cultural "under-standing," and as such it can have a magical or sacred meaning, as in the case of prayer rugs. The "woman in a convent" probably knows only the bare floor, because her goal is one of transcendence, of surrendering comfort as well as cultural patterns. But to the social elite, or even to the oriental devotee praying to his god, society offers the relative comfort of beautiful rugs so he may meet the universe, not merely in terms of the support the natural soil gives, but protected by and securely established on the mental-spiritual as well as manual achievements of those who keep the cultural symbols alive.

	This is the last symbol in the fifty-ninth five-fold sequence. It shows the beautiful products of dedicated and inspired group performance at the level of tradition. It emphasizes the value of RELIANCE ON TRADITION.`
},
{
	sign: "Capricorn",
	degree: "26",
	title: "A NATURE SPIRIT DANCING IN THE IRIDESCENT MIST OF A WATERFALL.",
	keynote: `KEYNOTE: The ability to perceive the hidden and creative spirit of natural phenomena.`,
	description: `The Sabian symbols make several references to nature spirits Here we are dealing with the revelation of the spiritual or psychic forces related to the element water. Water binds all living cells in a wholesome interplay. It symbolizes the constant flow of vital energies, the fluidity of a consciousness which finds itself stimulated by change. The great cycle of water within the earth's biosphere (oceans, clouds, rain, river) symbolizes the basic phases of universal life processes, the ascent and descent of emotional energies and of love. We can personify these phases and speak of "the soul of nature," and at a cosmic level of "the World-Soul," anima mundi. Water is the substance of the telluric manifestations of this soul. It is a magical substance, and modern chemists are rediscovering in their study of its unusual behavior in certain situations what old Alchemists in their own way no doubt understood.

	This is the first stage of the sixtieth subcycle, and it presents us with a deep intuition of super-physical energies which at the end of this five-fold sequence we will see fully mastered (Phase 300). The consciousness here becomes sensitized to the downward flow of OCCULT ENERGY in its bountiful natural aspect.`
},
{
	sign: "Capricorn",
	degree: "27",
	title: "PILGRIMS CLIMBING THE STEEP STEPS LEADING TO A MOUNTAIN SHRINE.",
	keynote: `KEYNOTE: The ascent of the individualized consciousness to the highest realizations reached by the spiritual leaders of its culture.`,
	description: `We hear a great deal now about "peak experiences," but this symbol tells us that they depend to a very great extent upon following a path that many have trod before, under the inspiration of the great Teachers and Sages of our race. The shrine is built by the unceasing dedication of perhaps generations of men. The pilgrimage is hallowed by the devotion of many, even though each person finds on their own mountaintop what to them seems a unique and transcendent revelation.

	In this second stage symbol we witness the rise of the human consciousness; the preceding symbol spoke of what one may picture as the "descent" of the energies of nature which, like water, flow down toward a lower level of intensity. It is man's supreme task to rise like fire, impelled by a vision they share with their companions. The Keyword: UPREACHING.`
},
{
	sign: "Capricorn",
	degree: "28",
	title: "A LARGE AVIARY.",
	keynote: `KEYNOTE: The enjoyment of spiritual values by the soul able to familiarize itself with their implications.`,
	description: `Birds symbolize spiritual forces, and the aviary presents us with a picture of these forces or desires contained within a mind open to the light of psychic or Soul realities, and bringing joy and harmony to the consciousness. The strenuous ascent represented by the preceding scene changes into a picture of familiarity with inspiring experiences. Yet this familiarity may also suggest a lack of spontaneity and of the thrill of discovery. To use modern terms, the peak experiences have become those of a high plateau, at which level one may lose one's sense of direction at times.

	This is the third stage in the sixtieth sequence of phases which lead to group mastery of cosmic energies. The youthful effort to reach the summits of cultural and spiritual attainment has settled down into a complex state of inspiration — a state which at times may bring confusion because of the multiplicity of the voices to which one has become open. One may speak here of CLAIRAUDIENCE, meaning a capacity for being responsive to many inner voices.`
},
{
	sign: "Capricorn",
	degree: "29",
	title: "A WOMAN READING TEA LEAVES.",
	keynote: `KEYNOTE: The ability to see the Signature of hidden meaning in every occurrence drawing one's attention.`,
	description: `Man has always sought to interpret the meaning of events or situations which baffle him in terms of specific omens or "Signatures." The reading of tea leaves is only a commonplace modern version of a certain type of procedure used by priests of all ancient religions. The practice is based on a realization of "the relation of everything to everything else" — a definition of astrology given by Marc Jones. Dream interpretation in depth psychology belongs to the same category, as it is based upon the establishment of a close connection between the unconscious and the conscious. But in dream analysis the individual unconscious, at least at first, is mainly referred to, while in omens (or modern fortune-telling at its best) one relies upon the power of occult forces or entities to convey the information that will clarify confusing situations.

	This fourth stage symbol can be referred to a specific "technique" of understanding or evaluation. What is implied is the ability not only to perceive the facts of everyday existence, but to see through these facts and discover how they are related to the realm of basic meanings or archetypal processes. This is essentially what is meant by true CLAIRVOYANCE, the capacity to see in everything the Signature of deeper realities.`
},
{
	sign: "Capricorn",
	degree: "30",
	title: "A SECRET MEETING OF MEN RESPONSIBLE FOR EXECUTIVE DECISIONS IN WORLD AFFAIRS.",
	keynote: `KEYNOTE: The power to assume responsibility for crucial choices arrived at after mature discussions with those who share this power.`,
	description: `We are all aware now of the work of secret committees in the White House and at all levels of the government. The student of esoteric philosophy believes in the existence of what has been called an "inner Government" which has the power to direct or guide the evolution of our planet and of mankind. Some people speak of "occult Hierarchy," or of the "White Lodge." Here again what is at stake is a "seeing through" the facts of telluric processes and human history — assuming that these facts are at least in part the outcome of the decisions of a supreme Council of quasi-divine Beings. Obviously the symbol can also refer to what occurs at the more ordinary level of business and politics. At any level, it refers to the highest form of social interaction.

	This is the last symbol belonging to Scene Twenty and related to the zodiacal sign Capricorn. We see in it the culmination of social responsibility and a reference to EXECUTIVE POWER.`
},
{
	sign: "Aquarius",
	degree: "01",
	title: "AN OLD ADOBE MISSION IN CALIFORNIA.",
	keynote: `KEYNOTE: The power inherent in all great human works to endure far beyond the workers' life spans.`,
	description: `The works and spirit of the Spanish priests who directed the building of the California missions have had a lasting influence on the development of this land; these remain as a monument to the men who were able to make their mark upon this alien environment. While the zodiacal sign Capricorn begins with a symbol of socio-political power, Aquarius at its start presents a more spiritualized and idealistic or creative picture of the social forces at work. Moreover, it stresses the enduring character of human achievements ensouled by a great vision. At least within the frame of reference of our Western civilization, the symbol speaks of the projection of a noble ideal into concrete forms of beauty and significance, thus of the radiation of a "civilizing" power into an institution offering to primitive men the opportunity to reach a higher, more organized and productive, level of activity.

	This is the first stage in the sixty-first five-fold sequence. It speaks to us of THE CONCRETIZATION OF AN IDEAL. This also implies the "immortalization" of an individual within a great collective and cultural enterprise.`
},
{
	sign: "Aquarius",
	degree: "02",
	title: "AN UNEXPECTED THUNDERSTORM.",
	keynote: `KEYNOTE: The need to develop the inner security which will enable us to meet unexpected crises.`,
	description: `An interesting connection can be made between the symbols for Taurus 1° and 2° — "A clear mountain stream" and "An electrical storm" — and those for Aquarius 1° and 2°, two hundred and seventy degrees apart (a "waning" square, in terms of a cycle of relationship such as the lunation cycle). In the first case we deal with energies or activities that can be related to the natural development of the individual. But here we are primarily concerned with social, collective processes and the function of the individual within them. The symbol itself — "An unexpected thunderstorm" — could be given a very positive meaning in an arid environment, but the emphasis on "unexpected" tends to accent the sudden and dangerous character of the event. Such a thunderstorm in a region of dry hills can cause a devastating flood. At any rate, it refers to an event for which one is not prepared — a menace to men's works.

	Seen as a second stage symbol — thus in contrast to the preceding one — this scene stresses the fact that nature may reduce to impermanence the seemingly most permanent endeavors and constructive activities of men. Under a downpour of rain, adobe brick can return to mud. All human institutions and their achievements can be washed away, even in their day of great glory. "Dust you were, dust you must become." This is NATURE'S CHALLENGE.`
},
{
	sign: "Aquarius",
	degree: "03",
	title: "A DESERTER FROM THE NAVY.",
	keynote: `KEYNOTE: The individual's self-realization through a crucial repudiation of a collective status which has become unbearable.`,
	description: `This symbol recalls the one for Scorpio 21°, but the fact that actual "desertion" is emphasized and reference is made to "the Navy" suggests that the crisis symbolized here is one implying an irrevocable change of status. Man refuses to accept the type of cultural patterns derived from his society's specific approach to local circumstances and to the universe as a whole, and in another sense, from its particular relationship to the all-human collective Unconscious. (The Navy refers to the ocean, symbol of primordial and unconscious evolutionary forces.) He not only refuses to obey orders, he deliberately turns his back on his collective social status; he becomes an outcast, and through this decision he may definitely individualize his consciousness.

	This is the third stage of the sixty-first five-fold sequence. Something with collective social value is being potentially destroyed, but nature is not the destroyer (as in the preceding symbol). Man, the individual, steps out of his bondage to collective patterns and ideals. He may thus "find himself' by means of a sharp renunciation of his social birthright, i.e. by a crucial process of DESOCIALIZATION.`
},
{
	sign: "Aquarius",
	degree: "04",
	title: "A HINDU YOGI DEMONSTRATES HIS HEALING POWERS.",
	keynote: `KEYNOTE: The disciplined use of spiritual energies in restoring the natural harmony disturbed by man's inharmonic attempts to transcend nature through mind.`,
	description: `Civilization implies a process of transcending compulsive and rigid biological drives while making use, in a refined and mentalized way, of what it cannot control. The goal of a true civilization — Western civilization being to a large extent a caricature of it — is the development of a humanity composed of self-motivated and responsible individuals freely associating according to harmonic patterns in order to produce a vast spiritual chord of consciousness fully actualizing the potentialities inherent in the archetype, MAN. The process of individualization and civilization is full of dangers, and for a very long time it is obsessed by karmic shadows, the results of individual and collective deviations and perversions. Such results most often lead to disease. It is the spiritual duty of individuals who have been able to tap the vast reservoir of spiritual forces pervading our planet to use these energies for healing their less-fortunate comrades.

	This fourth stage symbol refers to a technique which not only can be used for the healing of physical illnesses but for the "making whole" of whatever has lost its natural root integration and has not yet reached the holistic state of perfect harmony and identification with the "divine" whole. Self-discipline, purity of motive, compassion, faith in the divine order are required — and the FOCUSING OF SPIRITUAL ENERGY.`
},
{
	sign: "Aquarius",
	degree: "05",
	title: "A COUNCIL OF ANCESTORS IS SEEN IMPLEMENTING THE EFFORTS OF A YOUNG LEADER.",
	keynote: `KEYNOTE: The Root foundation of past performances which power and sustain whatever decision is made in a crisis by an individual.`,
	description: `The whole past of mankind stands behind any individual effort, especially in times of critical decisions. The endeavor of the priests who built the California missions had behind it the whole past of Catholic proselytizing, i.e. the attempt to bring the "Good News" to all people of the Earth. Every individual is far more dependent upon the strength of their ancestors' achievements — or oppressed by their failures and lack of vision — than they usually believe. This can mean a hidden foundation of individual strength, or the inertia of a tradition unable to transcend its limited origins.

	This is the last symbol in the sixty-first five-fold sequence. It suggests that in many situations RELIANCE UPON PRECEDENTS will enable the aspirant to greatness to tap the power of their deepest roots.  `
},
{
	sign: "Aquarius",
	degree: "06",
	title: "A MASKED FIGURE PERFORMS RITUALISTIC ACTS IN A MYSTERY PLAY.",
	keynote: `KEYNOTE: The individual's involvement in long-established patterns of activity aiming at the release of collective power.`,
	description: `The great Mysteries of the past were created by inspired Seers and Adepts for the purpose of transferring to a mentally conscious and humanly significant level of group operation what in the lower kingdoms of life we call instincts. Biological and cosmic energies can thus be used to ensure that social processes do not lose touch with the deeper realities of planetary and universal Life. Rituals are binding, and often the performers wear masks, for they do not act as human persons but as focal points for the release of transpersonal forces.

	This first symbol of the sixty-second five-fold sequence presents to us social processes in their deepest occult aspect. The individual is seen having assumed a TRANSPERSONAL RESPONSIBILITY.`
},
{
	sign: "Aquarius",
	degree: "07",
	title: "A CHILD IS SEEN BEING BORN OUT OF AN EGG.",
	keynote: `KEYNOTE: The emergence of new mutations according to the great rhythms of the cosmos.`,
	description: `The ancient symbolism of the Cosmic Egg (Hiranyagharba in Sanskrit) out of which a new universe is born can be interpreted at several levels. Here we see the appearance of a new type of human being who is not born from "Ancestors" and who therefore is free from the inertia of mankind's past. He is a new product of evolution, a mutant. He constitutes a fresh projection of the creative Spirit that emanates from the cosmic or planetary Whole, and not from any local culture and racial tradition.

	This second stage symbol is in contrast with the preceding one. It can be said to announce the EMERGENCE OF GLOBAL MAN for the New Age. The power of the whole is focused within him in perfect freedom from ancient standards of value based on local conditions.`
},
{
	sign: "Aquarius",
	degree: "08",
	title: "BEAUTIFULLY GOWNED WAX FIGURES ON DISPLAY.",
	keynote: `KEYNOTE: The inspiration one may derive from the appearance of Exemplars who present to us the archetypes of a new culture.`,
	description: `We are dealing here with the fixed symbols upon which a culture is based, with mental archetypes. They are kept and made available as patterns to imitate, or at least from which to draw new motives for inspiration. We are at the stage of vision: new forms are revealed to the consciousness, as well as new ways of meeting other people in social relationships.

	This is the third stage in the sixty-second sequence of five symbols. In a sense the generic human past and the future are implied here. The wax figures are impersonal forms. The gowns constitute a static presentation of ideal patterns; yet they are the PREFORMATION of what will be experienced in the culture being born. They herald new collective developments.`
},
{
	sign: "Aquarius",
	degree: "09",
	title: "A FLAG IS SEEN TURNING INTO AN EAGLE.",
	keynote: `KEYNOTE: The dynamic incorporation of new social values in individuals who exemplify the spiritual potential and greatest significance of these values.`,
	description: `This symbol nearly duplicates the one for Sagittarius 12°, but in this five-fold sequence it has a somewhat different meaning — especially since the last term of the mysterious transformation (i.e. the crowing of the eagle in chanticleer's fashion) is omitted. All that is implied here is the vitalization of a powerful symbol, its embodiment in a living reality, i.e. in a person able to fly in consciousness to the highest spiritual realm. The archetype is given living substance and wings. The Image has become a Power.

	This fourth stage symbol, as usual, gives us a technical suggestion. To "see" the new archetype, to perceive the new standard of value with one's mind is not enough. The seer must become the doer. The impersonal is dynamized and brought into focus. We have here the ACTING OUT of the vision.`
},
{
	sign: "Aquarius",
	degree: "10",
	title: "A MAN WHO HAD FOR A TIME BECOME THE EMBODIMENT OF A POPULAR IDEAL IS MADE TO REALIZE THAT AS A PERSON HE IS NOT THIS IDEAL.",
	keynote: `KEYNOTE: The need to deal with human beings as persons rather than as screens upon which one projects one's dream and ideal.`,
	description: `Here we have a final statement on the relationship between mental-spiritual vision and living reality, between persons and the ideal they appear to incarnate, between the "great lover Image" and one's need for love — a love his presence stimulated and aroused. The "star" on the movie screen is not the actual person. The star's popularity fades away, the person remains. What has this episode of popularity actually done to the person? This is a question that can be applied to a great variety of circumstances.

	This fifth symbol in the sixty-second sequence brings to our attention an issue that is basic and may confront us in various forms. Person versus archetype. This can mean a critical need for SELF-REVALUATION.`
},
{
	sign: "Aquarius",
	degree: "11",
	title: "DURING A SILENT HOUR, A MAN RECEIVES A NEW INSPIRATION WHICH MAY CHANGE HIS LIFE.",
	keynote: `KEYNOTE: The need to rely upon inner inspiration and guidance at the start of new developments.`,
	description: `What is implied here is the essential value of keeping open to the descent of spiritual or Soul forces, especially when a new period of individual activity is about to begin. The individual should not depend mainly on outer circumstances and on traditional — and in a sense external, because collectively formulated — incentives. There is a creative power within, a power that can be tapped, or rather that should be allowed to flow into the brain-consciousness or the hands which write or fashion materials into original forms.

	This is the first stage in the sixty-third sequence of five phases of activity. It refers to the OVERSHADOWING of the individual consciousness by an inner, yet transcendent, Power.`
},
{
	sign: "Aquarius",
	degree: "12",
	title: "ON A VAST STAIRCASE STAND PEOPLE OF DIFFERENT TYPES, GRADUATED UPWARD.",
	keynote: `KEYNOTE: The necessity of recognizing differences of types and levels of development wherever human beings live and work together.`,
	description: `This symbol obviously refers to the ascending process of evolution of life forms and consciousness. It seems to apply especially to the fact that differences of levels exist among human beings. The ideal of equalitarianism has to be balanced by a realization that hierarchy of levels is a fact of nature. Each person should be aware of the level at which he (or she) stands, even as he strives to move toward a higher one. He should look up for inspiration and examples, while helping the human beings of the next lower level to reach up. This is the great give-and-take of evolution, and it applies to sociocultural evolution as well as to the progression of biological species.

	At this second stage of the sixty-third sequence we find a symbol of "ascent," contrasting with the preceding one which implied a "descent" of spiritual forces. It warns us against sentimentally overstressing our Western equalitarianism which essentially applies to the spiritual core of all individual persons, considered "sons of God" or spiritual monads. Every human being is potentially divine as an individual person, but THE NATURAL PROGRESSION OF STATES OF CONSCIOUSNESS is an unavoidable reality to accept at the social-mental level.`
},
{
	sign: "Aquarius",
	degree: "13",
	title: "A BAROMETER.",
	keynote: `KEYNOTE: The ability to discover basic natural facts that allow us to plan in advance for action.`,
	description: `Here we are no longer dealing with ascent or descent, but with natural laws which involve causal relationships and the passage of one natural condition into another. The barometer registers air pressure, and a change of pressure today gives some indication of what the weather will be tomorrow. In a sense this is the modern scientific equivalent of archaic prognostication through omens. Likewise, animals grow a more or less thick fur in early autumn according to whether the winter will be more or less severe. Planning for the near future is a possibility because the potential (or seed) of the future is already operating at the core of the present.

	This third symbol of the sixty-third sequence tells us that it is most important to seek — by whatever means and at whatever level of consciousness — a knowledge of causal progression. In the broadest sense this implies an awareness of cyclic processes, and this includes astrology. The Keyword is ANTICIPATION.`
},
{
	sign: "Aquarius",
	degree: "14",
	title: "A TRAIN ENTERING A TUNNEL.",
	keynote: `KEYNOTE: The ability to short-cut the process of natural evolution by the exercise of will, mental skill and physical self-discipline.`,
	description: `In this symbol we see a condensation of what is implied in the three preceding ones. Man must be inspired by a vision of what is possible for him to achieve; he has to organize a schedule of necessary activities if the work is to be done in terms of successive moves, each requiring a specialized type of skill and strength (i.e. a hierarchy of functions); he has to find a propitious time for beginning the work. The end result is an acceleration of the evolutionary process, whether at the psychobiological level (that of yoga and other similar disciplines) or at the social level, i.e. the level at which, in its external aspect, civilization proceeds.

	This fourth stage symbol presents a picture of what can be achieved by a combination of social and cultural, and even personal, techniques. It implies the possibility of shortening the length of time needed for progress by cutting through obstacles and delays. The Keyword is PENETRATION.`
},
{
	sign: "Aquarius",
	degree: "15",
	title: "TWO LOVEBIRDS SITTING ON A FENCE AND SINGING HAPPILY.",
	keynote: `KEYNOTE: The blessing bestowed upon personal achievements by the spiritually fulfilled consciousness of the Soul.`,
	description: `This symbol can be interpreted at various levels of significance, but it evidently suggests a state of being in which two complementary aspects of spiritual reality — however we may conceive them — are united; this union results in happiness or bliss (ananda). As the two birds are "sitting on a fence," and a fence separates two fields or gardens, the implication is that the separative consciousness of the ego can thus be blessed, perhaps as a spiritual reward for long-sustained and well-done work.

	This is the last symbol of the sixty-third five-fold sequence which completes Scene Twenty-one. Inner happiness is seen to be the reward for all individuals who have made a valuable "contribution" to their community or to mankind as a whole. In its highest aspect this happiness is indeed BEATITUDE.`
},
{
	sign: "Aquarius",
	degree: "16",
	title: "A BIG BUSINESSMAN AT HIS DESK.",
	keynote: `KEYNOTE: The ability to organize the many aspects of an enterprise involving a large group of human beings.`,
	description: `A great deal of what is glowingly written about the Aquarian Age is probably sheer glamour. The New Age should be one in which man learns to use the power generated by human togetherness and group interplay — that is, to use it harmoniously for the welfare of the whole of which all individuals are parts, humanity and the planet Earth. This has never been achieved and only very rarely attempted. Mankind today must make a thorough and irresistible attempt, or be nearly destroyed — except for a creative "remnant" of seed-persons who would have to begin again from new foundations. In the field of big business, of huge war undertakings (like the Normandy landing in World War II) or of major national efforts (like the Moon landings) great results have been achieved, but the motive and the quality of the human interrelationships involved were neither of permanent significance nor invested with a truly harmonic quality. The character of the techniques used were totally un-satisfactory from a "human" point of view. Nevertheless there is much to learn from modern large-scale management and systems analysis, even in terms of personal endeavors of very limited scope.

	This is the first stage in the sixty-fourth five-fold subcycle. It introduces the concept of management which is basic at this period of the cyclic life process which the zodiac symbolizes, yet which needs to be totally reevaluated if mankind is to actualize the spiritual potentialities implied in the evolutionary transformation just ahead. ORGANATION should be the Keyword, rather than mere "organization"; for humanity now can and should realize that it is indeed an "organism."`
},
{
	sign: "Aquarius",
	degree: "17",
	title: "A WATCHDOG STANDS GUARD, PROTECTING HIS MASTER AND HIS POSSESSIONS.",
	keynote: `KEYNOTE: The development of the capacity to protect one-self and to safeguard one's individual rights under complex social pressures.`,
	description: `What seems to be implied in this symbol, considering its position in the entire cycle, is that under present-day social conditions the individual person needs protection against the ever-growing encroachments of society upon his theoretically recognized right to lead a private life free from public interference. Seen in this light the symbol stands in contrast to the preceding one depicting the power of big business and the totalitarian implications of large-scale organization. At a deeper occult level of interpretation it also reveals the need to protect oneself against "astral" intrusions and perhaps "black magic," the more so as one ventures into supernormal states of consciousness. It is said that the Adept trains certain subhuman entities ("Elementals") to protect him. The Christian religion speaks of Guardian Angels in a related sense.

	At this second stage we see the individual able to master natural energies which he enlists in his service, so he may pursue his individualized work of destiny in security. This is another aspect of the relationship of individual-to-society. Individuals of course do also seek to rob or injure other persons, but the state of affairs resulting from a society glorifying competition, ambition and success at any cost is largely responsible for individual violence. The more creative the person, the greater his or her NEED FOR PROTECTION.`
},
{
	sign: "Aquarius",
	degree: "18",
	title: "A MAN'S SECRET MOTIVES ARE BEING PUBLICLY UNMASKED.",
	keynote: `KEYNOTE: The difficulty for the modern individual to keep secret his private past or his deeper motives.`,
	description: `This symbol logically follows the two preceding ones. Today, struggle between the power of society and the rights of the individual leads in the end to the defeat of the latter. The media and innumerable governmental agencies are nearly always able to find access to remains or records of past actions; modern psychologists and psychiatrists are increasingly adept at penetrating the deepest secrets of a life through "analysis" and all kinds of more or less allowed techniques involving drugs and the subconscious reactions of muscles and nerves. The individual whose activities have to remain unrecognized is engaged in a constant struggle; he needs the help of higher Powers as well as of the protective agencies he may have placed at his service.

	This is the third stage in the sixty-fourth five-fold sequence of archetypal images of the cyclic process. It refers to the UNMASKING of hidden motives and personal secrets. It may refer to the publicizing of past behavior.`
},
{
	sign: "Aquarius",
	degree: "19",
	title: "A FOREST FIRE IS BEING SUBDUED BY THE USE OF WATER, CHEMICALS AND SHEER MUSCULAR ENERGY.",
	keynote: `KEYNOTE: The skill and courage necessary to bring under control the destructive potential of carelessness of karmic "visitations."`,
	description: `Forest fires may be caused by human carelessness, by lightning or by the by-products of modern technology. Every individual — at least once in his lifetime, if not repeatedly — may perhaps have to face spectacular reactions to seemingly insignificant acts. These are to be considered means to test his strength, ingenuity or emotional stability. Every faculty at his disposal must be made use of — emotional, mental, physical. He needs faith in himself and in superior Powers.

	At this fourth stage of the five-fold series we are shown man in action in a crucial and potentially devastating situation. There is need for a total mobilization of energy and a deep sense of INDOMITABILITY.`
},
{
	sign: "Aquarius",
	degree: "20",
	title: "A LARGE WHITE DOVE BEARING A MESSAGE.",
	keynote: `KEYNOTE: The answer of spiritual agencies to thorough, sustained and victorious individual efforts.`,
	description: `This concludes most significantly this series of five symbols. The individual who has gone courageously and with indomitable spirit through his crucial crisis receives, as it were, a deep spiritual blessing from the Soul-realm: "Mission accomplished. Peace be with you." And in this blessing a secret prophecy of what is yet to come may be seen by the perspicacious and spiritually sensitive mind of the recipient. Every real spiritual step a man takes in his development is the result of a victory over forces of inertia or destruction. The Divine is totally "present" in the heart of all true victories.

	This is the fifth and last symbol of the sixty-fourth series. What the "message" is depends on the particular situation, but the white dove always signifies peace; at the very heart of this peace is the CERTIFICATION of individual worth and victory.`
},
{
	sign: "Aquarius",
	degree: "21",
	title: "A DISAPPOINTED AND DISILLUSIONED WOMAN COURAGEOUSLY FACES A SEEMINGLY EMPTY LIFE. ",
	keynote: `KEYNOTE: The capacity to meet emotionally upsetting experiences in human relationships with strength of character and personal integrity.`,
	description: `The man who manages vast and complex business enterprises most often reaches power and achieves success because of his ability to deal with crises and temporary reverses of fortune. At the emotional level we now see a "woman" confronted with sharp disappointment and forced to face the vanishing of cherished illusions, presumably in terms of a close personal relationship. She has to learn to manage such crises, which are really tests of inner strength and perhaps compassion. We all have within ourselves the power to learn through emotional crises. But like any other faculty it needs development.

	This is the first symbol in the sixty-fifth five-fold sequence. It urges us to develop RESILIENCE under adversity.`
},
{
	sign: "Aquarius",
	degree: "22",
	title: "A RUG IS PLACED ON THE FLOOR OF A NURSERY TO ALLOW CHILDREN TO PLAY IN COMFORT AND WARMTH.",
	keynote: `KEYNOTE: The warmth of understanding which comes to those who, early in life, are open to new possibilities.`,
	description: `Man is never left without assistance when eagerly seeking to grow emotionally and spiritually. Even if he does not consciously realize the intent and value of what sustains his self-development and cushions the shocks which life provides his growth in understanding, still the assistance is there. He may think: No one understands me. But the understanding is there if he does not egotistically take for granted that life and society owe him everything.

	This second stage symbol contrasts the kindness inherent in so many of life's situations with the tragic feeling of disillusionment represented by the first stage symbol. Through a warm APPRECIATION of basic opportunities and even small comforts, we can safely and happily grow into personal maturity.`
},
{
	sign: "Aquarius",
	degree: "23",
	title: "A BIG BEAR SITTING DOWN AND WAVING ALL ITS PAWS.",
	keynote: `KEYNOTE: The self-discipline which results from an intelligent development of individual faculties under proper training.`,
	description: `What constitutes the proper training of children or animals is a complex and much-disputed problem. The symbol seems to state simply that powerful life energies can be trained adequately — the implication or extension of the idea being that no training is really successful unless it leads to the realization of the value and power of self-discipline. We are constantly faced with situations which, whether we are aware of it or not, are in fact training situations; God or the Soul is the trainer. Much depends on the attitudes we assume in these situations.

	This is the third symbol in the sixty-fifth sequence. We see in it the outcome of what is suggested in the two preceding ones. Character and a warm "under-standing" of what is involved in the process of growth and overcoming of emotional heaviness can be taught. We can learn to discipline our natural impulses and to use them for a more-than-personal purpose. This is DISCIPLESHIP in the true sense of the term.`
},
{
	sign: "Aquarius",
	degree: "24",
	title: "A MAN, HAVING OVERCOME HIS PASSIONS, TEACHES DEEP WISDOM IN TERMS OF HIS EXPERIENCE.",
	keynote: `KEYNOTE: The constructive use to which difficult past experiences can be put as examples for those who are still striving to overcome their passions.`,
	description: `Every type of experience can be made to serve a spiritual purpose. Every man or woman, however humble his or her status, can be an example to younger people who are still struggling to overcome or control the compulsive drives of their emotional-biological natures. Whoever has managed a difficult performance contributes to the collective wisdom of his community and of mankind. Every achievement is to be passed on to those who may be inspired by it to greater and more adequate efforts.

	At this fourth stage of the sixty-fourth subcycle we are given a never-to-be-forgotten hint: it is the responsibility of anyone who has taken one step ahead in his evolution to help others to take that step. This is true education. The Keyword is COMMUNICABILITY.`
},
{
	sign: "Aquarius",
	degree: "25",
	title: "A BUTTERFLY WITH THE RIGHT WING MORE PERFECTLY FORMED.",
	keynote: `KEYNOTE: The capacity to develop the rational and fully conscious aspect of the mind ahead of normal evolution.`,
	description: `What seems implied is a kind of mutation, and more specifically the special development of whatever is symbolized by the "right side" of the organism. Here, however, the spiritual body (the butterfly) is what the Image represents. A strong process of conscious individualization is suggested, perhaps at the expense of the instinctual-emotional aspect of the personality (its "left side").

	This last symbol fittingly concludes this sixty-fifth sequence, which began with "A disappointed woman . . ." The five-fold set deals with the management of human energies at the emotional level; here management means overcoming — this, on the basis of negative or ego-challenging experiences. This fifth symbol refers thus to the results of a TRANSMUTATION OF EMOTIONAL ENERGIES.`
},
{
	sign: "Aquarius",
	degree: "26",
	title: "A GARAGE MAN TESTING A CAR'S BATTERY WITH A HYDROMETER.",
	keynote: `KEYNOTE: Skill in applying knowledge of natural laws to the solution of everyday problems resulting from life in our technological society.`,
	description: `Here we see a man using his analytical mind to check up on the operation of the machines his inventive genius produced. This simple commonplace operation is used here as an indication of how deeply technology involves us in small matters, yet matters which in some circumstances could make the difference between life and death — i.e. a mechanical failure in a car on a crowded freeway. The need for "management" therefore is seen to affect every detail of our individual lives; this applies as well to the complexities of interpersonal, social or political relationships, because our modern society is indeed like a huge machine speeding on dangerous ground. Safety depends on available power.

	This is the first of five degree symbols in the sixty-sixth sequence. It tells us that we constantly need the use of our intellectual power of observation and analysis to check on the effectiveness of the energies at our disposal. It is a symbol of MENTAL EFFICIENCY.`
},
{
	sign: "Aquarius",
	degree: "27",
	title: "AN ANCIENT POTTERY BOWL FILLED WITH FRESH VIOLETS.",
	keynote: `KEYNOTE: The importance of traditional skills and artistic values deeply rooted in man's instinctive feelings as frames of reference for man's most authentic emotions.`,
	description: `This symbol contrasts with the preceding one just as personal reticence and a simple love of natural beauty contrast with the rush, gawdiness and intellectual efficiency characterizing so much of our modern existence. Violets have often been considered symbols of modesty and humility — values which were understood to be the mark of true womanhood . . . long ago, it seems!

	In this symbol we see pictured the dependence of the purest feelings of natural living upon the traditions within which they find their most adequate and effective setting. It is a symbol of DELICACY OF FEELING.`
},
{
	sign: "Aquarius",
	degree: "28",
	title: "A TREE FELLED AND SAWED TO ENSURE A SUPPLY OF WOOD FOR THE WINTER.",
	keynote: `KEYNOTE: Knowledge and skill used in its natural surroundings for the satisfaction of vital basic needs.`,
	description: `This symbol combines, as it were, the implications represented in the two preceding ones. It relates to natural living the human capacity to prepare for the future and to use both physical strength and mental ingenuity. In meeting the hardships inherent in an existence close to nature, strength, efficiency and intelligence are needed, but they are incorporated in a life in which every act can be part of a harmonic and beautiful ritual permeated with deep significance.      

	This is the third in the sixty-sixth five-fold series of symbols. It refers to the efficient use of natural resources for insuring man's well-being. Such a use is based on INTELLIGENT FORESIGHT.`
},
{
	sign: "Aquarius",
	degree: "29",
	title: "A BUTTERFLY EMERGING FROM A CHRYSALIS.",
	keynote: `KEYNOTE: The capacity to utterly transform the character of one's consciousness by radically altering the structural patterns of everyday living and the types of relationships one enters upon.`,
	description: `This is the second time within a very short span of the cycle that the butterfly symbol appears (cf. Aquarius 25°). Here what is emphasized is the process of metamorphosis itself. It is the fourth symbol of a five-fold sequence and it stresses the essential character of the activity required at this stage of the cycle; i.e. nothing short of a complete renewal of all the implications of being alive as a human individual will do. A radical change is needed. At this stage, this change is individual and mental, and it  should  be  seen  against  the  background  of humanity as a whole. What is revealed is the potential ability of every human being to participate in a higher realm of evolution AFTER his or her emergence from a critical state of transition.

	At this fourth stage of the sixty-fifth subcycle the Keyword is METAMORPHOSIS. In spiritual terms, this implies "Initiation," i.e. entering a higher realm of conscious existence and there joining a sacred Company.`
},
{
	sign: "Aquarius",
	degree: "30",
	title: "DEEPLY BOOTED IN THE PAST OF A VERY ANCIENT CULTURE, A SPIRITUAL BROTHERHOOD IN WHICH MANY INDIVIDUAL MINDS ARE MERGED INTO THE GLOWING LIGHT OF A UNANIMOUS CONSCIOUSNESS IS REVEALED TO ONE WHO HAS EMERGED SUCCESSFULLY FROM HIS METAMORPHOSIS.",
	keynote: `KEYNOTE: The ability for the person with an open mind and a deep feeling for self-transcendence to come in contact with higher forms of existence.`,
	description: `The originally recorded Sabian symbol stated: "The field of Ardath in bloom," which referred to a scene in an occult novel by Marie Corelli centering upon ancient Babylon. The reference may well have been a "blind" inasmuch as Marc Jones has stressed his inner contact with a Brotherhood with Babylonian (or "Sabian") roots. A spiritual Brotherhood consitutes a state of "multi-unity" — i.e. a multiplicity of individuals, if one thinks of the paths they trod to reach their final metamorphosis, but a unity of consciousness and "Soul" —thus unanimity ("anima" meaning Soul). In this spiritual Whole each unit is a recognizable "form" or entity if one looks at it with the eyes of personality; but when seen through a unified spiritual vision or from a distance, the Whole appears to be one single area of radiant light. Similarly, when studied by the modern physicist, light can be apprehended either as a stream of identifiable particles (photons) or as one continuous wave. Whether it is seen as one or the other depends on the point of view.

	This is the last and culminating symbol of Scene Twenty-two of the cyclic ritual. This is indeed a fitting symbol, as the number 22 symbolizes all forms of mastery. At any level, it is a symbol of spiritual group fulfillment — of CONSCIOUS TOTALITY OF BEING.`
},
{
	sign: "Pisces",
	degree: "01",
	title: "IN A CROWDED MARKETPLACE FARMERS AND MIDDLEMEN DISPLAY A GREAT VARIETY OF PRODUCTS.",
	keynote: `KEYNOTE: The process of commingling and interchange which at all levels demonstrates the health of a community.`,
	description: `In any twelve-fold division of a complete cycle (for instance the 12 zodiacal signs and the 12 Houses of a birth chart) the twelfth section often has been given a negative significance. It can refer to oppressive conditions as it represents a "closing of accounts," a final evaluation of the harvest of the cycle. A very bad harvest may lead to bankruptcy; a premature revolt may bring the rebel to jail; the dissolute may end in a hospital. In this section of the cycle a man reaps what he has sown. But it may also be honors, social prestige, the interests of well-managed wealth. In this twenty-fourth scene what is stressed is the coming together, in a final experience of community, of all factors previously experienced; this means constructive interaction and an interchange of the products of social activity. In a practical sense, the symbol, whenever it is found, emphasizes that the time has come to take full advantage of the social opportunities to bargain and to trade.

	This is the first stage of the process related to the sixty-seventh five-fold sequence of symbols. It refers to all that can be gained from social interplay and especially, in the broadest sense of the word, from COMMERCE.`
},
{
	sign: "Pisces",
	degree: "02",
	title: "A SQUIRREL HIDING FROM HUNTERS.",
	keynote: `KEYNOTE: The individual's need both to ensure his future subsistence and to protect himself from aggressive social elements.`,
	description: `The squirrel not only has to hide and store food for the winter, but to be on the lockout for the dangers involved in gathering this food supply. Social processes always cast strong shadows, The individual is never certain of being safe among his fellowmen, once the process of individualization — with its negative aspects, competition, social aggressivity and greed — forces the breakdown of the organic tribal state of mankind during the archaic ages.

	This second stage symbol contrasts with the first. It warns of the dangers of life in society during an era of exacerbated individualism, when violence is a possibility never to be dismissed. The need for SELF-PROTECTION and caution is ever present.`
},
{
	sign: "Pisces",
	degree: "03",
	title: "PETRIFIED TREE TRUNKS LIE BROKEN ON DESERT SAND. ",
	keynote: `KEYNOTE: The power to preserve records of their achievements which is inherent in fully matured cultures.`,
	description: `When a vast group of men succeed in building a culture with strong institutions which express themselves in significant symbols and works of art or literature, such an effort of many generations is rarely lost altogether. In one form or another, records of this culture endure or are mysteriously preserved, simply because they reveal the place and function of this particular culture in the long process of unfoldment of the potentialities inherent in archetypal MAN. It is such a concept that has been mythified and popularized in the religious idea of the resurrection of the dead on the Last Day. The symbol of petrified wood in the Arizona desert, however, tells us that the actual preservation of the records is never perfect or total. Only fragments remain, significant enough to reveal the essential archetypal form.

	This third symbol of the sixty-seventh five-fold sequence brings the promise of social immortality — i.e. the preservation of the enduring (because archetypally meaningful) factors in whatever man attempts within his culture. A symbol of INDESTRUCTABILITY.`
},
{
	sign: "Pisces",
	degree: "04",
	title: "HEAVY CAR TRAFFIC ON A NARROW ISTHMUS LINKING TWO SEASHORE RESORTS.",
	keynote: `KEYNOTE: The mobility and intensity of interchange which make possible and characterize complex social processes.`,
	description: `Here we see the Concept of commerce and social interaction in a new form. What is stressed is the need to establish unceasing dynamic relationships between all aspects and functions of the social life. The more complex the relationships, the more dynamic and restless the society. In this symbol the "isthmus" refers to a geographic situation found near San Diego, California, where these Sabian symbols were produced — also in Florida and elsewhere. A narrow strip of land separates the sea from a lagoon and on this strip, houses are built and roads are constantly filled with moving cars. The proximity of the sea stresses the collective nature of social experiences and of what may appear to be "individual" achievements.

	This fourth stage symbol-evokes many aspects of what at several levels can be called TRAFFIC. The technique for achieving social results is always based on an interchange of ideas and interplay of activities. Often, however, confusion ensues and traffic jams are ever-present possibilities.`
},
{
	sign: "Pisces",
	degree: "05",
	title: "A CHURCH BAZAAR.",
	keynote: `KEYNOTE: The value of giving a spiritual or transcendent sanction to even the most commonplace interchanges between social persons and individual minds.`,
	description: `This is the last of five symbols emphasizing the interaction between people constituting a social group, small or large. It brings in the element of religious sanctions. The purpose of any organized religion is primarily to meet the need of giving a more permanent significance to interpersonal relationships within the framework of a particular way of life and culture. It helps to keep the society "whole" by making it "holy"— at least in principle and ideal. It justifies human behavior by blessing it with a divine Revelation of what is good and valuable. It idealizes biological and social needs by ritualizing them.

	This ends the sixty-seventh five-fold sequence on a note of RITUALlZED BENEFICENCE. It stresses the possibility of the "Presence of God" in even the most material human activities.`
},
{
	sign: "Pisces",
	degree: "06",
	title: "A PARADE OF ARMY OFFICERS IN FULL DRESS.",
	keynote: `KEYNOTE: The dedication of human beings to the service of their community, and the assurance that it will be emotionally sustained by the people at large.`,
	description: `Here we see at work the emotion-rousing appeal of social activities which demand the surrendering by the individual of his personal way of life, his opinions and his comfort. The socializing process is pictured in all its intensity but what is implied even more is the support that the socialized person can expect from the collectivity if he is ready to act and to sacrifice himself for the nation or the group.

	This is the first symbol of the sixty-eighth series. It allegorizes the power generated by a totally accepted and enforced collective discipline, and the exaltation and mass response which he who has achieved this self-surrender to a social tradition can expect in return.
	
	The Keyword is GROUP-RESPONSIBILITY.`
},
{
	sign: "Pisces",
	degree: "07",
	title: "ILLUMINED BY A SHAFT OF LIGHT, A LARGE CROSS LIES ON ROCKS SURROUNDED BY SEA MIST.",
	keynote: `KEYNOTE: The spiritual blessing which strengthens individuals who, happen what may, stand uncompromisingly for their own truth.`,
	description: `Men who do not depend upon collective values, traditions or support but seek at any cost to be true to their individual self and destiny almost inevitably face some kind of crucifixion. They are sustained only by the power within them, to which a light above answers. The symbol tells us: "Be true to thine own self, and in the midst of the outer confusion displayed by those surrounding you, you will realize what you really are as an Individual — a son of God."

	This second stage symbol presents us with a realization in polar opposition to that evoked by the preceding scene. It implies the supreme worth of a life guided by an inner voice and manifesting a high degree of SELF-ASSERTION.`
},
{
	sign: "Pisces",
	degree: "08",
	title: "A GIRL BLOWING A BUGLE.",
	keynote: `KEYNOTE: A call to participation in the service of the race, as an evolutionary crisis approaches.`,
	description: `This symbolic picture presents another aspect of the emotional relationship between the individual and the collectivity of human beings. It can also be related to the old feminist movement or the present women's liberation. In traditional symbolism the woman refers more specifically to the biological and psychic aspect of human life; she is seen primarily as the mother, and/or the intuitive or "psychic" type of person. A new race of human beings may well be slowly unfolding some of its potential of consciousness and fulfillment. The individual who envisions this evolutionary development "sounds the call." He or she is both seer-herald and mutant. In that sense such a human being is both an individual true to his original nature and a dedicated person — dedicated to the future he or she holds in latency as does a seed in mutation.

	At this third stage of the sixty-eighth five-fold sequence the two preceding phases blend in a new form of consecration of the individual to the Whole. Tomorrow acts through today; it SUMMONS men to rebirth.`
},
{
	sign: "Pisces",
	degree: "09",
	title: "A JOCKEY SPURS HIS HORSE, INTENT ON OUT-DISTANCING HIS RIVALS.",
	keynote: `KEYNOTE: Intense mobilization of energy and skill in the drive for success in any social performance affected by the competitive spirit.`,
	description: `Since the end of the archaic ages and the stressing of individualism, especially in our American society which worships the material images of "success," the desire to win any kind of "race" engenders an often-feverish release of energy controlled by technical skill and long practice. Wherever this symbol is found, it indicates the need to spur one's total being toward speedy attainment of whatever goal it may be.

	This is the fourth symbol in the sixty-eighth series; its technical significance is quite evident. Every superfluous "weight," every unnecessary consideration is to be dismissed in the one-pointed attempt to reach one's social goal. SELF-QUICKENING may be the Keyword.`
},
{
	sign: "Pisces",
	degree: "10",
	title: "AN AVIATOR PURSUES HIS JOURNEY, FLYING THROUGH GROUND-OBSCURING CLOUDS.",
	keynote: `KEYNOTE: Man's ability to develop powers and skills which by transcending natural limitations allow him to operate in mental-spiritual realms.`,
	description: `This symbol in a sense synthesizes the implications of the four preceding ones: the dedication to the community of men (present and future), self-assertion and the ambition to reach a social goal. Man is seen mastering difficulties implied in a type of operation transcending his organic limitations and the narrow boundaries of a localized "living space." He does so as an individual in command of powerful energies, but also as heir to the industry of countless innovators and managers.

	This is the last symbol of the sixty-eighth five-fold sequence of evolving stages of consciousness and human activity. It evokes the achievement of MASTERY.`
},
{
	sign: "Pisces",
	degree: "11",
	title: "MEN TRAVELING A NARROW PATH, SEEKING ILLUMINATION.",
	keynote: `KEYNOTE: The capacity inherent in every individual to seek at whatever cost entrance to a transcendent realm of reality.`,
	description: `This refers to the ancient and eternal symbol of the Path of Discipleship. The greatness of man is that he can always be greater; and the belief — deeply rooted in men's inner nature — that if he fulfills the necessary conditions he can find "Elder Brothers" who have already attained a higher level of consciousness and will transfer their attainment and light to him. The Path is always open to the pure in heart, the mentally aware, the conqueror of emotions and the spiritually self-mobilized.

	This symbol opens the sixty-ninth five-fold sequence and a new level of consciousness. Man is always in the making and remaking. He can always go further, reach beyond. But he has to take the first step. Someone can show him the Path, but he alone can do the walking. Thus the Zen injunction: WALK ON.`
},
{
	sign: "Pisces",
	degree: "12",
	title: "IN THE SANCTUARY OF AN OCCULT BROTHERHOOD, NEWLY INITIATED MEMBERS ARE BEING EXAMINED AND THEIR CHARACTER TESTED.",
	keynote: `KEYNOTE: The ever-repeated challenge presented to the individual by the group in which he has claimed acceptance — the challenge to prove himself and his ability to assume responsibility effectively.`,
	description: `At any level of activity, sooner or later life itself demands of the individual that he or she stand up clearly and unequivocally to the ideal he himself has declared publicly his own. At the occult level the testing seems to be controlled and irrevocable. The "initiate" has become a constituent part of an integrated field of mental-spiritual activity. He is therefore controlled by the structural order of the group. He is no longer seeking; having found his place, he must prove himself able to fulfill the function associated with it. He is no longer "free" as an individual, for he has become a part of an integral Whole operating under structural principles of immense antiquity.

	This second symbolic stage of unfoldment stands in contrast to the first in that the individual is now bound by collective laws and traditions. At a mundane political or business level he is the junior executive incorporated in a hierarchical institution. He has at all times to prove his worth. QUALIFICATION is an apt Keyword.`
},
{
	sign: "Pisces",
	degree: "13",
	title: "AN ANCIENT SWORD, USED IN MANY BATTLES, IS DISPLAYED IN A MUSEUM.",
	keynote: `KEYNOTE: Through the effectual use of his will a consecrated man can become a symbol of courage for all those who follow in his footsteps.`,
	description: `Will power is the ultimate spiritual weapon, and its undeviating use is the certification of individual worth. Wherever found, this symbol emphasizes the imperative need to make use of the will in meeting the basic challenges of the inner life as well as outer adversaries.

	With this third symbol of the sixty-ninth sequence we see singled out and strongly emphasized the one power in man which is an assurance of victory in the contests generated by social (or occult) processes in which he has become an active part. The individual must use that WILL POWER, yet it is not really his own once he operates at a spiritual level. It is God's will operating through his mind which focuses its thrusts. It is, occultly speaking, the power of the Brotherhood — the energy of the Whole operating through the one-pointed individual who has made this Whole aware of the need for its use in a particular situation.`
},
{
	sign: "Pisces",
	degree: "14",
	title: "A LADY WRAPPED IN A LARGE STOLE OF FOX FUR.",
	keynote: `KEYNOTE: The use of intelligence and mental subtlety as a protection against storms and trials.`,
	description: `Coming just after the preceding symbols and as the fourth stage of a five-fold sequence, which is usually related to some kind of technique, this symbol may at first seem irrelevant. The key to its interpretation, missed by the commentators, is fox fur. In symbolism and mythology the fox is always a clever and subtle animal. It represents the intellect at its early stage of "cunning"; in a broader sense, it also refers to "intelligence," considered as the ability to adapt to any and all life situations. Spiritual will and the ability to stand in facing tests are necessary in any crucial or challenging situation that an individual meets within a power-oriented group. But the sword-like will often has to be shielded, and intelligence or acumen can be the most precious help in danger. It is a personal (i.e. "animal" or instinctual) shield, perhaps even a camouflage. It hides the central will, but it keeps the individual from unnecessary hardships.

	What we see symbolized here is a self-protective way of meeting the inclemencies of weather, actual or psychic, which abound as one leads a life consecrated to a vaster Whole; for this very consecration arouses strong enmities. Unnecessary risks are forbidden to the initiate, for the security of the Brotherhood might be endangered. The need for PROTECTIVE SHIELDING is imperative, and glamour can be an effective shield.`
},
{
	sign: "Pisces",
	degree: "15",
	title: "AN OFFICER INSTRUCTING HIS MEN BEFORE A SIMULATED ASSAULT UNDER A BARRAGE OF LIVE SHELLS.",
	keynote: `KEYNOTE: The need for thorough rehearsing before any complex and inherently dangerous social ritual in which power is used or evoked.`,
	description: `In this fifth symbol of a series dealing with the confrontation with superpersonal group or occult power we see a picture which once again synthesizes what the four preceding symbols have implied, rather than stated. In social life, as well as occultism, conflict is always to be expected; one must prepare for it. At the close of the great cycle — in the zodiac, the sign Pisces — a deep-seated struggle is inevitable at least to some extent. It can be a struggle against the ghosts of the unfulfilled past, the "unlived life," or a confrontation with accumulated and often-eluded karma. Indeed, Pisces refers to a period in the year during which many generals and admirals have been born. The rules of the game, at least in traditional forms of warfare, can be known. One may have to rehearse the dangerous play, just as our astronauts endlessly rehearsed every  step in the moon-landings. Individual rashness cannot be tolerated. Even a deliberate sacrifice must play a well-conceived part — like the sacrifice of an important piece in a game of chess.

	This is the last symbol in Scene Twenty-three. The entire scene dealt in various ways with the process of integration of the individual into a social Whole, a community, an occult Brotherhood. A concluding Keyword could be VALORIZATION. The concept of group-value dominates the entire scene.`
},
{
	sign: "Pisces",
	degree: "16",
	title: "IN THE QUIET OF HIS STUDY A CREATIVE INDIVIDUAL EXPERIENCES A FLOW OF INSPIRATION.",
	keynote: `KEYNOTE: Reliance upon one's inner source of inspiration or guidance.`,
	description: `In this last scene of the great ritual of cyclic existence we are dealing with various aspects of the process that enables man to "con-firm," formulate and perpetuate the original creative impulse which has become self-actualized in a myriad of ways throughout the cycle, short or long as the cycle may be. This first symbol strikes the keynote of truly significant creative processes: their source is above, beyond, but also around the individual creator. The inspiration, original and individual though it may be, is given a form which is conditioned by the cultural, social and religious background of the creative person. In a sense, every genius merely records an answer to the needs of his time. The hands that write, play an instrument, or mold a plastic material are his own; the urge or drive back of the flow of inspiration has arisen in the vast collective mind of Man.

	This is the first of the seventieth series of five symbols. The individual aspect of the creative process is emphasized as is the individual's need for concentration and at least inner quiet. He must have faith in his own SUBJECTIVE STRENGTH.`
},
{
	sign: "Pisces",
	degree: "17",
	title: "AN EASTER PARADE.",
	keynote: ` KEYNOTE: The capacity inherent in all great sociocultural Images to unite the members of a community in a display of excellence.`,
	description: `Here we see, by contrast, the unifying power of great myths and symbols in truly organic and self-perpetuating culture. The Image of the Resurrection spurs all men within the pale of Christendom to appear at their very best and to dynamize themselves in some kind of self-renewal in response to the Christ mythos, and to the call of nature's springtime as well. Wherever found, this symbol emphasizes the value of attuning one's life activities and moods to the ritualistic patterns of society or Earth-nature, rather than acting in complete independence from the group.

	At this second stage of the five-fold subcycle the Collective dominates the Individual, Yin overpowers Yang. It is a time for conformity to what constitutes the highest ideals of one's culture and for PARTICIPATION IN COLLECTIVE PEAK EXPERIENCES.`
},
{
	sign: "Pisces",
	degree: "18",
	title: "IN A GIGANTIC TENT, VILLAGERS WITNESS A SPECTACULAR PERFORMANCE.",
	keynote: `KEYNOTE: The collective appeal of a well-staged and exciting display of skill and/or oratory.`,
	description: `At first, Marc Jones interpreted the "gigantic tent" as the locale for a revivalist's meeting; later he suggested a circus tent instead. In a sense, the basic meaning is the same whether it is the traditional performance of skilled clowns, acrobats or animal trainers, or that of a religious fundamentalist dramatizing an old religious imagery, what takes place is the use of personal achievement and conviction to bring a crowd to a state of enthusiasm sufficient to make it forget its boredom with everyday routine or its familiar sins of commission or omission.

	At this third stage of the seventieth five-fold sequence, the individual person and the collectivity are brought together in a significant performance which subtly strengthens the communal spirit directly or indirectly.  The implication of the symbol, whenever it is found operating, is that the time has come for the individual to dare to present himself and his works to his community for applause, or for the purpose of attracting a following. What is suggested is PUBLIC SELF-DRAMATIZATION.`
},
{
	sign: "Pisces",
	degree: "19",
	title: "A MASTER INSTRUCTING HIS DISCIPLE.",
	keynote: `KEYNOTE: The transfer of power and knowledge which keeps the original spiritual and creative Impulse of the cycle active and undeviated.`,
	description: `The Hindu ideal of the sacred relationship between guru and chela (disciple) has of late become familiar to a vast number of young and not-so-young people. The doctrine of "the Apostolic succession" in the Roman Catholic Church has a similar significance. The Power and archetypal knowledge released "in the beginning" of any cycle (or at "Creation") must be perpetuated until the very Last Day — the Omega state of which Teilhard de Chardin glowingly speaks. This Power is the "self" of the cyclic manifestation, the unchanging Tone (AUM) of all existences within this cycle. It can be transmitted from master to disciple at the latter's "Initiation." It must be so transmitted for when the line of transmission (in Sanskrit, guruampara) is discontinued, the cyclic process begins to collapse in futility and spiritual darkness.

	This fourth stage symbol gives us a clue to the supreme technique necessary for the continuation of all manifestations of power and spiritual understanding. The transmission is from person to person; it follows a general, unchanging pattern, yet it operates in terms of particular and individual circumstances. Keyword: INVESTITURE.`
},
{
	sign: "Pisces",
	degree: "20",
	title: "A TABLE SET FOR AN EVENING MEAL.",
	keynote: `KEYNOTE: An indication that in the end and at the appointed time the individual's needs will be met among those to whom he is linked by a spiritual (or biological) web of energies.`,
	description: `The significant element in this scene is not only the meal, but the fact that it is an "evening" meal. To use traditional symbolism, after a long chain of personal existences the Soul returns to its spiritual home at the close of the day-of-manifestation. There it finds that which renews and amply sustains; the happiness of the "beyond of existence" is experienced — if all has gone well.

	This last symbol of the seventieth five-fold sequence promises a satisfying or fulfilling end to whatever one has been undertaking. As the life closes, the Soul-consciousness finds NOURISHMENT in the harvest of whatever, during the whole life, has been relevant to the archetypal purpose and destiny of the Soul — one of the myriad of aspects of the divine creative word which began the cycle.`
},
{
	sign: "Pisces",
	degree: "21",
	title: "UNDER THE WATCHFUL AND KIND EYE OF A CHINESE SERVANT, A GIRL FONDLES A LITTLE WHITE LAMB.",
	keynote: `KEYNOTE: Growth in consciousness in its earliest tactile awareness of the wonders of unsophisticated living.`,
	description: `This symbol recalls the one for Phase 174 (Virgo 24°) — "Mary and her little lamb" — but it occupies a different position in the five-fold sequence and a new factor is added: the "Chinese servant." According to the occult tradition, the original Chinese race was an extension of the humanity (or "Root Race") preceding ours — thus the stress upon the biological factors of family and ancestors, and also on the dualism of the Yang and Yin interplay. The "Chinese servant" represents the past as a servant of the new evolution. (The "white lamb" suggests the sign of all beginnings, Aries.) This new evolution is just about to begin during the late Pisces phase of the year cycle. It is as yet an ideal, a white loveliness. The girl discovers the new feeling of the touch of wool and of animal warmth. The preceding five-fold sequence began with a symbol suggesting the inspiring revelation of new truths or facts which the creative person is seeking to formulate. Now we witness another kind of discovery — a sensuously emotional discovery, perhaps a presentiment of the mother-feeling.

	This is the first symbol of the seventy-first sequence. It brings together past and future, an overlapping of levels. The Chinese kindly watching the white girl; the girl fondling the white lamb. There is charm and ingenuousness in the scene — a vision of WHITE HOPE, a hope for a future that can only be felt, almost naively.`
},
{
	sign: "Pisces",
	degree: "22",
	title: "A PROPHET CARRYING TABLETS OF THE NEW LAW IS WALKING DOWN THE SLOPES OF MOUNT SINAI.",
	keynote: `KEYNOTE: The need to bring down to the level of everyday existence the clear realizations made manifest in a great "peak experience."`,
	description: `The symbol obviously refers to Moses after he received from the God of his people the basic principles upon which a new religion, and even more a new ritual of living, should be founded. This basic "Law" has to be "brought down." It represents a descent of formative and structuring power, a divine Revelation. This type of revealed knowledge contrasts with the kind of knowing born out of the experience of touch, of feeling, of warmth of contact. This second stage symbol pictures a process to which a religious God-given character has been attributed in the past, but which today is being investigated at the personal and psychological level. The important point here is: what do you do after you have a peak experience, an inner revelation? The Keyword MANDATE is appropriate; but the basic problem is how to fulfill it in the right spirit.`
},
{
	sign: "Pisces",
	degree: "23",
	title: `A "MATERIALIZING" MEDIUM GIVING A SEANCE.`,
	keynote: `KEYNOTE: The ability to give of one's own vital energy to substantiate one's conscious ideals or unconscious desires.`,
	description: `The person who believes he or she has a mission or mandate, or any special gift that can be of value to his community, must substantiate this belief. He has to produce results. Sometimes this involves difficulties and special conditions or circumstances; it always demands to some extent the gift of some power of value which is deeply one's own. The thought of sacrifice was suggested by the "white lamb" in the first symbol of this five-old series. Something precious involved in a deeply personal experience has to be surrendered, offered to others. The medium's psychic substance provides the materials made visible in the phenomena, if the latter are genuine. After the séance, the medium is usually exhausted. The performer gives of his very life to the performance.

	This refers to the third stage in the seventy-first five-fold process. The display of psychic power that the symbol depicts can be interpreted positively or negatively according to the motives that induced the "medium" to give the seance. In its most constructive aspect it suggests the Keyword: SUBSTANTIATION. The shadowy aspect of the process is "deception."`
},
{
	sign: "Pisces",
	degree: "24",
	title: "ON A SMALL ISLAND SURROUNDED BY THE VAST EXPANSE OF THE SEA, PEOPLE ARE SEEN LIVING IN CLOSE INTERACTION.",
	keynote: `KEYNOTE: The need to consciously accept one's own personal limitations in order to concentrate one's energies and to live a centered and fulfilled life.`,
	description: `Every individualized person is a small island in the vast ocean of mankind. The ego fulfills a necessary function, as it sets boundaries and gives a specific character to the consciousness. Within these boundaries a complex interplay linking and integrating the various aspects of the personal life can operate constructively. In time, these ego-boundaries can not only expand, but can become a zone of intense interchange between the inner and the outer, between the individual and the community, between man and the universe.

	This fourth stage symbol tells us that the first duty of any man or woman is to be truly what he or she is as an individual. But this individual has a particular dharma, i.e. a place and function in a vaster whole. The island's inhabitants get subsistence from the sea, and in time learn to navigate this sea and interact with other islanders — and all eventually will come to realize their oneness within the whole Earth, which includes everything. An appropriate Keyword would be CENTRALIZATION.`
},
{
	sign: "Pisces",
	degree: "25",
	title: "A RELIGIOUS ORGANIZATION SUCCEEDS IN OVERCOMING THE CORRUPTING INFLUENCE OF PERVERTED PRACTICES AND MATERIALIZED IDEALS.",
	keynote: `KEYNOTE: The power of the Soul to intervene in the personal life and to induce necessary catharses.`,
	description: `The necessary centralization of the conscious attention and will symbolized by the preceding picture most often bring negative results — exclusivism, pride, jealousy, greed for power and wealth. Every man is a Church that has the Soul as its god, but most men forget the Soul and live according to dogmatic rules and habits which not only have become empty of inner meaning, but very often have been perverted by the demands of the senses and the emotional nature, and by the ego with its rationalizing intellect. A purging or catharsis is needed to restore not only fresh and creative spontaneity, but even more the contact with the Soul and the God-ordained dharma.

	This is the last stage in the seventy-first subcycle. It leads significantly to the series of five symbols which concludes the vast cycle, because the final consummation of the process of actualization of the potency inherent in the original Creative Act requires moments of crisis and PURIFICATION.`
},
{
	sign: "Pisces",
	degree: "26",
	title: "WATCHING THE VERY THIN MOON CRESCENT APPEARING AT SUNSET, DIFFERENT PEOPLE REALIZE THAT THE TIME HAS COME TO GO AHEAD WITH THEIR DIFFERENT PROJECTS.",
	keynote: `KEYNOTE: A keen appreciation of the value of individualized responses to any challenge of life.`,
	description: `The rather obscure original notation for this zodiacal degree, "A new moon that divides its influences," when translated into practical terms refers to the fact that, confronted with the opportunity to expand their energy along new lines, modern individuals will react according to their own personal characters. One basic cosmic-spiritual impulse will lead these varied personalities to take equally varied steps. In any society that glorifies individualism, everyone should therefore accept this fact and not try to compel other individuals to conform to a single pattern of response.

	This first symbol of the seventy-second and last series of five stresses the essential nature of the cyclic process of actualization of human potential, i.e. the emergence of the individual (cf. symbol for Phase 1). This should lead to a realization of THE FALLACY OF TOTALITARIANISM: at times we can all act like despots, demanding that others react to any situation exactly as we do.`
},
{
	sign: "Pisces",
	degree: "27",
	title: "THE HARVEST MOON ILLUMINES A CLEAR AUTUMNAL SKY.",
	keynote: `KEYNOTE: The light of fulfillment that blesses work well done.`,
	description: `For astronomical reasons the full moon of early autumn, the harvest moon, appears slightly larger than all other full moons. In our temperate Northern Hemisphere, these are the days when the green of summer fields and woods has turned gold and warm brown — days for the reaping of the good harvest, if all has gone well. This symbol brings us the message that the time has come to reap what we have not only sown, but also cultivated — or failed to cultivate.

	This second stage symbol once more stands in opposition to the one for the preceding stage — new moon having now become full moon, indeed the fullest of all full moons. The Keyword is CONSUMMATION. But in this consummation — this "karmic" moment — the seed of the new cyclic manifestation is already latent.`
},
{
	sign: "Pisces",
	degree: "28",
	title: "A FERTILE GARDEN UNDER THE FULL MOON REVEALS A VARIETY OF FULL-GROWN VEGETABLES.",
	keynote: `KEYNOTE: The full satisfaction of the individual's basic needs.`,
	description: `This symbol would seem a duplication of the preceding one, but if it is related to the first of this five-fold series (Phase 356) it’s meaning becomes clear. What is stressed now is not the full moon itself or its light, but the moon's power to call forth the instinctive urge for growth; many things respond in many different ways. The symbol refers to a typical garden, not to a field. Such a garden contains a variety of plants, herbs and vegetables grown specifically to fill an equal variety of human needs and tastes.

	In this sense the third symbol of this seventy-second sequence combines the meanings of the first two. It is a symbol of ABUNDANCE, an abundance fitted to individualized requirements and wants.`
},
{
	sign: "Pisces",
	degree: "29",
	title: "LIGHT BREAKING INTO MANY COLORS THROUGH A PRISM.",
	keynote: `KEYNOTE: The analytical power of the mind necessary for the formulation of life processes in their many aspects.`,
	description: `Cycles of existence begin in unity and end in what I have called "multi-unity." At the stage of consummation the many individual differences are totaled; they constitute a sum. Within that sum — a unified total — the inevitability of the future process of differentiation is implied, because every cycle leaves a mass of waste products slowly returning to the unconscious state of chemical matter, of "humus." What the symbol tells us is that unity will always break again into multiplicity. The "prism" is always there. There is no absolute unity; if anything could be called "absolute" it is the relationship between the One and the Many.

	This fourth stage symbol of the concluding five-fold sequence of phases points to the fundamental type of operation in all modes of existence. The most beautiful and seemingly everlasting experience of unity will in time be superseded by the need to attend to a multiplicity of details. Existence implies DIFFERENTIATION.`
},
{
	sign: "Pisces",
	degree: "30",
	title: "A MAJESTIC ROCK FORMATION RESEMBLING A FACE IS IDEALIZED BY A BOY WHO TAKES IT AS HIS IDEAL OF GREATNESS, AND AS HE GROWS UP, BEGINS TO LOOK LIKE IT.",
	keynote: `KEYNOTE: The power of clearly visualized ideals to mold the life of the visualizer.`,
	description: `Nathaniel Hawthorne's story "The Great Stone Face" is used here in an allegorical sense to show the capacity for self-transformation latent in man. This power can be developed through visualization, when the emotions and the will are poured into the visualized mental image. At the highest spiritual-cosmic level this is the power used by the God-like Beings at the close of a cosmic cycle in projecting the basic Formula (the Word) which will start a new universe. In a biological sense, it is the power latent in all seeds — the power to produce and guide the growth of the future plant. A most fitting symbol for the last phase of the cyclic process. Within the end of the cycle the seed of a new beginning exists in potency — unless the entire cycle has proven to be a failure.

	This is the last stage of the last scene of the great ritual play of cyclic transformations. It brings to us a realization of the power of archetypes as factors conditioning life processes. Thus we could use as a final Keyword: ARCHETYPALIZATION.`
},

]

ZodiacSymbol.create(degrees, (err) => {
	if (err) { 
		throw(err) 
	}
	console.log(`Created ${degrees.length} degrees`)
	mongoose.connection.close();
  });

  // and run node bin/zodiacDegrees.js to seed the DB!!