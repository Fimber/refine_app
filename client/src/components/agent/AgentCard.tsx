import { EmailOutlined, LocationCity, Phone, Place } from '@mui/icons-material';
import {useGetIdentity} from '@pankod/refine-core';
import { Box, Stack, Typography} from '@pankod/refine-mui';
import {Link} from '@pankod/refine-react-router-v6';


import { AgentCardProp, InfoBarProps} from 'interfaces/agent';

const InfoBar = ({ icon, name}: InfoBarProps) => (
  <Stack flex={1} minWidth={{xs: '100%', sm: 300}} gap={1.5} direction='row'>
    {icon}
    <Typography fontSize={14} color='#808191'>{name}</Typography>
  </Stack>
)

const AgentCard = ({id, name, email, avatar, noOfProperties}: AgentCardProp) => {
  
  const {data : currentUser} = useGetIdentity();
  const generateLink = () => {
    if(currentUser.email === email) return '/my-profile'

    return `/agents/show/${id}`;
  }

  return (
    <Box
    component={Link}
    to={generateLink()}
    width='100%'
    sx={{
      display: 'flex',
      flexDirection: {xs: 'column', sm: 'row'},
      gap: '20px',
      padding: '20px',
      '&:hover' : {
        boxShadow: '0 22px 45px 2px rgba(176,176,176,0.1)'
      }
    }}
    >
      <img
      src={avatar}
      width={90}
      height={90}
      style={{borderRadius: '50%', objectFit: 'cover'}}
      />
      <Stack
      direction='column'
      justifyContent='space-between'
      flex={1}
      gap={{xs:4, sm:2}}
      >
        <Stack
        gap={2}
        direction='row'
        flexWrap='wrap'
        alignItems='center'
        >
          <Typography fontSize={22} fontWeight={600} color='#11142d'>I'm {name}.</Typography>
          <Typography>A Real-Estate Agent</Typography>
          <Stack direction='row' flexWrap='wrap' justifyContent='space-between' gap={2}>
            <InfoBar
            icon={<EmailOutlined sx={{ color: '#898191'}}/>}
            name={email}
            />
            <InfoBar
            icon={<Place sx={{ color: '#898191'}}/>}
            name='Uniport'
            />
            <InfoBar
            icon={<Phone sx={{ color: '#898191'}}/>}
            name='+2348081421991'
            />
            <InfoBar
            icon={<LocationCity sx={{ color: '#898191'}}/>}
            name={`${noOfProperties} Properties`}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgentCard