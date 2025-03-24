import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ExCard from './components/ExCard';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [exes] = useState([
    {
      id: 1,
      name: 'Соня',
      photo: './photos/Sofia.jpg',
      period: '2016-2019(2.5 года)',
      description: 'Первые отношения, было весело и драмматично, часто расходились сходились.Плюсы симпотичная, клевый секс. Минусы ебалась с другими мужиками.',
      rate: '7/10'
    },
    {
      id: 2,
      name: 'Лена(Кристина)',
      photo: './photos/Lena.jpg',
      period: '2017-2017(чето типо пол года)',
      description: 'Вообще общались с ней лет 5 она с челябинска(2200км от меня) ну и так закрутилось что начался романтик, в 17 году поехал в челябинск на денек, попили пива, полизались, больше не общались. Очень круто повлияла на мое развитие как человека и личности в процессе общения и за это благодарен. Из минусов она суицидница и торчала на тяжелых наркотиках.',
      rate: '8/10'
    },
    {
      id: 3,
      name: 'Катя',
      photo: './photos/Katya.jpg',
      period: '2019-2019(3 месяца)',
      description: 'После расставания с Соней нашел себе с Луцка девченку чтоб както перекрыть тоску, пару раз ездил к ней, один раз она ко мне, впринципи забавно было.Из минусов она была выше на 10см весила 90кг и грубо говоря не выделялась ни красотой ни умом.',
      rate: '2/10'
    },
    {
      id: 4,
      name: 'Маша',
      photo: './photos/Masha.jpg',
      period: 'конец 2019',
      description: 'Подруга которая понравилась, выпили признался переспали, дальше динамила. Плюсы хоть не кончил но на мне впервые так скакали. Минусы она потом всем рассказывала что я ее изнасиловал, было не приятно.',
      rate: '4/10'
    },
    {
      id: 5,
      name: 'Вероника',
      photo: './photos/Nika.jpg',
      period: '2020+',
      description: 'Дружили в одной компании, на одном др чето разобщались, туда сюда полизались но после отношения не получились, в будущем много раз на протяжении лет 4х ахуенно и тесно общались почти доходило до отношений но я почемуто постоянно наваливал кринжа или сливался. Плюсы полторашка/подлокотник прикольно.Минусы думает что я клоун',
      rate: '7/10'
    },
    {
      id: 6,
      name: 'Дарина',
      photo: './photos/Darina.jpg',
      period: '2020-2020(5 месяцев,+ неделя в 2021)',
      description: 'Началось с того что я по пьяне сказал что у меня еще никогда не было блондинки а она ответила и не будет, забавные отношения были. Из плюсов я дома редко появлялся ночевал почти всегда у нее. Минусы она нюхала мефедрон в крысу и не делилась.',
      rate: '5/10'
    },
    {
      id: 7,
      name: 'Милания',
      photo: './photos/Milania.jpg',
      period: 'конец 2020-2022(1.5 года)',
      description: 'Девочка с Литвы, отношения на расстоянии были, летом 2021 дернул черт на неделю вернулся к Дарине, потом чето ахуел что наделал, с трудом вернулся к Милане, за месяц собрал деньги документы и уехал к ней на 3 месяца, потом она ко мне приехала на нг а потом 1 марта я должен был лететь на пол года но началась война.Изза стресса запил и трепал нервы, расстались и хорошо ей же лучше.Плюсы супер красотка хозяйственная планировал женится даже.Минусы была не очень умной, но думаю дело в возрасте(18 лет).',
      rate: '10/10'
    },
    {
      id: 8,
      name: 'Таисия',
      photo: './photos/Taisia.jpg',
      period: '2023-2025(1.8 года)',
      description: 'Бывшая моего лучшего друга, поиграли в пабг вместе, в итоге начали встречаться, сходу начали жить вместе, по началу у меня, потому у нее с ее мамой, по итогу в отношениях я испытывал только стресс и абьюз и сьебался.Плюсы  красивая. Минусы конченная',
      rate: '6/10'
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            Топ  дур
          </motion.h1>
          <Grid container spacing={3}>
            {exes.map((ex) => (
              <Grid item xs={12} sm={6} md={4} key={ex.id}>
                <ExCard ex={ex} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 