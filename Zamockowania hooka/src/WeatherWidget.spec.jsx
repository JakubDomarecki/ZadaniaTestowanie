import {screen, render} from '@testing-library/react'
import { WeatherWidget } from './WeatherWidget'
import * as useWeatherFile from './useWeather'

describe("<WeatherWidget/>", () => {
    afterAll(() => {
        useWeatherSpy.mockRestore()
    })
    

    test('should render loading message when is loading is true', () => {
        mockUseWeather({isLoading: true})
        render(<WeatherWidget/>)
        expect(screen.getByText('Loading weather data...')).toBeInTheDocument()

    })

    test('displays error state', () => {
        mockUseWeather({isError: true})
        render(<WeatherWidget/>)
        expect(screen.getByText('Failed to load weather data.')).toBeInTheDocument();
    })

    test('displays weather information',  () => {
        mockUseWeather({data: {temperature: 20, condition: 'Sunny'}})
        render(<WeatherWidget/>)
        expect( screen.getByText('Temperature: 20°C')).toBeInTheDocument();
        expect( screen.getByText('Condition: Sunny')).toBeInTheDocument();
    })
    
})

const useWeatherSpy = vi.spyOn(useWeatherFile, 'useWeather');

function mockUseWeather( {data = null, isError = false, isLoading = false} ) {
    useWeatherSpy.mockReturnValue({data, isLoading, isError});
}