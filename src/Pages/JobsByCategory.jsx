import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobsByCategory = () => {

    return (
        <div className='mt-10 max-w-7xl mx-auto'>
         <Tabs>
            <TabList>
            <Tab>On-Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part-Time</Tab>
            </TabList>

            <TabPanel>
            <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>hybrid</h2>
            </TabPanel>
            <TabPanel>
                <h2>Part-time</h2>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default JobsByCategory;