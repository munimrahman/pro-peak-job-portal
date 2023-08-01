import React from 'react';
import { useSelector } from 'react-redux';
import {
    companyFilterByIndustry,
    companyFilterBySize,
    companyFilterByWorkPlace,
} from '../../../features/filter/filterSlice';
import FilterOption from '../../JobList/AdvFilter/FilterOption';

function AdvFilterCompany() {
    const { industryFilter, companySizeFilter, workPlaceFilter } = useSelector(
        (state) => state.filter.company
    );
    return (
        <>
            {/* industry filter */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Industry</h3>

                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('Software')}
                    value="Software"
                    name="Software Development"
                />
                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('Social Media')}
                    name="Social Media"
                />
                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('App Development')}
                    name="App Development"
                />
                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('Finance')}
                    value="Finance"
                    name="Finance"
                />
                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('Management')}
                    name="Management"
                />
                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('Advertising')}
                    name="Advertising"
                />
                <FilterOption
                    action={companyFilterByIndustry}
                    isChecked={industryFilter.includes('Human Resource')}
                    name="Human Resource"
                />

                <div className="border-b pt-2" />
            </div>
            {/* comapny size filter */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Company Size</h3>

                <FilterOption
                    action={companyFilterBySize}
                    isChecked={companySizeFilter.includes('0-10')}
                    value="0-10"
                    name="0 - 10"
                />
                <FilterOption
                    action={companyFilterBySize}
                    isChecked={companySizeFilter.includes('11-50')}
                    value="11-50"
                    name="11 - 50"
                />
                <FilterOption
                    action={companyFilterBySize}
                    isChecked={companySizeFilter.includes('51-100')}
                    value="51-100"
                    name="51 - 100"
                />
                <FilterOption
                    action={companyFilterBySize}
                    isChecked={companySizeFilter.includes('101-200')}
                    value="101-200"
                    name="101 - 200"
                />
                <FilterOption
                    action={companyFilterBySize}
                    isChecked={companySizeFilter.includes('201-500')}
                    value="201-500"
                    name="201 - 500"
                />
                <FilterOption
                    action={companyFilterBySize}
                    isChecked={companySizeFilter.includes('501-1000')}
                    value="501-1000"
                    name="501 - 1000"
                />

                <div className="border-b pt-2" />
            </div>
            {/* work place filter */}
            <div>
                <h3 className="text-xl text-secondary font-bold mt-4 mb-2">Work Place</h3>

                <FilterOption
                    action={companyFilterByWorkPlace}
                    isChecked={workPlaceFilter.includes('Remote')}
                    name="Remote"
                />
                <FilterOption
                    action={companyFilterByWorkPlace}
                    isChecked={workPlaceFilter.includes('On Site')}
                    name="On Site"
                />
                <FilterOption
                    action={companyFilterByWorkPlace}
                    isChecked={workPlaceFilter.includes('Hybrid')}
                    name="Hybrid"
                />

                <div className="border-b pt-2" />
            </div>
        </>
    );
}

export default AdvFilterCompany;
