import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

const services = [
	{ title: 'Flight Services', subtitle: 'Arrival / Departure', img: 'https://images.unsplash.com/photo-1516239321693-128ee6e94886?auto=format&fit=crop&w=800&q=60', icon: 'flight' },
	{ title: 'Food Services', subtitle: 'Catering', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60', icon: 'restaurant' },
	{ title: 'Travel Services', subtitle: 'Pick-up / Drop', img: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&w=800&q=60', icon: 'directions-car' },
	{ title: 'Hotel Services', subtitle: 'Check-in / out', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60', icon: 'hotel' }
];

const bestSelling = [
	{ price: '2,700', img: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=60', name: 'Manali', type: 'hilly' },
	{ price: '4,999', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60', name: 'Paris', type: 'cultural' },
	{ price: '9,999', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60', name: 'Goa', type: 'beach' },
	{ price: '30,000', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=60', name: 'Maldives', type: 'beach' },
	{ price: '37,700', img: 'https://images.unsplash.com/photo-1587248720323-142457648709?auto=format&fit=crop&w=800&q=60', name: 'Switzerland', type: 'hilly' },
	{ price: '47,500', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60', name: 'Bali', type: 'beach' },
	{ price: '58,500', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=60', name: 'Iceland', type: 'hilly' },
	{ price: '59,500', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079fff?auto=format&fit=crop&w=800&q=60', name: 'Dubai', type: 'cultural' },
	{ price: '65,500', img: 'https://images.unsplash.com/photo-1499510318569-1a3d1b5d61a3?auto=format&fit=crop&w=800&q=60', name: 'Norway', type: 'hilly' }
];

const jackpot = [
	{ title: 'Thailand', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60', type: 'beach' },
	{ title: 'Goa', img: 'https://images.unsplash.com/photo-1533900291411-35f7b27b2214?auto=format&fit=crop&w=800&q=60', type: 'beach' },
	{ title: 'Kerala', img: 'https://images.unsplash.com/photo-1604635977277-e20dc7366e99?auto=format&fit=crop&w=800&q=60', type: 'cultural' },
	{ title: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60', type: 'beach' },
	{ title: 'Kashmir', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60', type: 'hilly' }
];

const locations = [
	{ country: 'India', city: 'Kashmir', img: 'https://images.unsplash.com/photo-1586688285249-0a14f76f663e?auto=format&fit=crop&w=800&q=60', type: 'hilly' },
	{ country: 'Turkey', city: 'Istanbul', img: 'https://images.unsplash.com/photo-1583241804143-5c27394a0403?auto=format&fit=crop&w=800&q=60', type: 'cultural' },
	{ country: 'France', city: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60', type: 'cultural' },
	{ country: 'Indonesia', city: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60', type: 'beach' },
	{ country: 'UAE', city: 'Dubai', img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=60', type: 'cultural' },
	{ country: 'Switzerland', city: 'Geneva', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=60', type: 'hilly' },
	{ country: 'Andaman & Nicobar', city: 'Port Blair', img: 'https://images.unsplash.com/photo-1616137728400-21f8c49b156c?auto=format&fit=crop&w=800&q=60', type: 'beach' }
];

// Recommendation system data
const recommendationCategories = [
	{ id: 'hilly', name: 'Hilly', icon: 'terrain', color: '#10b981' },
	{ id: 'beach', name: 'Beach', icon: 'beach-access', color: '#3b82f6' },
	{ id: 'cultural', name: 'Cultural', icon: 'account-balance', color: '#f59e0b' },
	{ id: 'adventure', name: 'Adventure', icon: 'hiking', color: '#ef4444' }
];

export default function HomeScreen() {
	const [selectedPreference, setSelectedPreference] = useState(null);
	const [showRecommendations, setShowRecommendations] = useState(false);

	const getRecommendations = (preference) => {
		setSelectedPreference(preference);
		setShowRecommendations(true);
	};

	const getFilteredDestinations = () => {
		if (!selectedPreference) return locations;
		return locations.filter(loc => loc.type === selectedPreference);
	};

	const getFilteredPackages = () => {
		if (!selectedPreference) return bestSelling.slice(0, 6);
		return bestSelling.filter(pkg => pkg.type === selectedPreference).slice(0, 6);
	};

	return (
		<View className="flex-1 bg-gray-50">
			<StatusBar style="light" />
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
				{/* Header with App Name */}
				<View className="bg-primary pt-12 pb-5 px-6">
					<View className="flex-row items-center justify-between">
						<View>
							<Text className="text-white text-3xl font-gbold tracking-wider">SAFARNAMA</Text>
							<Text className="text-white/90 text-sm font-gmedium mt-1">Your Personal Travel Companion</Text>
						</View>
						<Pressable 
							onPress={() => router.push('/community')}
							className="bg-white/20 rounded-full p-2"
						>
							<MaterialIcons name="add-location" size={24} color="#fff" />
						</Pressable>
					</View>
				</View>

				{/* Hero: simple and fast */}
				<View className="px-6 pt-5">
					<View className="bg-white rounded-2xl p-5 shadow-sm shadow-black/10 border border-gray-100">
						<Text className="text-2xl font-gbold text-gray-900">Discover your next adventure</Text>
						<Text className="text-sm font-gregular text-gray-600 mt-1">Handpicked places and deals for every mood</Text>
						<View className="mt-4 flex-row items-center bg-gray-100 rounded-xl px-3 py-2">
							<Ionicons name="search" size={18} color="#6b7280" />
							<TextInput
								placeholder="Search destinations, packages..."
								placeholderTextColor="#9ca3af"
								className="flex-1 px-2 py-1 font-gregular"
								onFocus={() => router.push('/package')}
							/>
						</View>
					</View>
				</View>

				{/* Smart Recommendations */}
				<View className="px-6 mt-6">
					<View className="bg-white rounded-2xl p-5 shadow-sm shadow-black/10">
						<View className="flex-row items-center justify-between mb-3">
							<View className="flex-1">
								<Text className="text-lg font-gbold text-gray-800">Smart Recommendations</Text>
								<Text className="text-xs font-gregular text-gray-600 mt-0.5">What type of destination do you prefer?</Text>
							</View>
							<MaterialIcons name="lightbulb" size={24} color="#f59e0b" />
						</View>

						<View className="flex-row flex-wrap -mx-1 mb-2">
							{recommendationCategories.map(cat => (
								<Pressable
									key={cat.id}
									onPress={() => getRecommendations(cat.id)}
									className={`mx-1 mb-2 px-4 py-2 rounded-full flex-row items-center ${
										selectedPreference === cat.id ? 'bg-primary' : 'bg-gray-100'
									}`}
								>
									<MaterialIcons 
										name={cat.icon} 
										size={16} 
										color={selectedPreference === cat.id ? '#fff' : cat.color} 
									/>
									<Text className={`ml-1.5 text-sm font-gsemibold ${
										selectedPreference === cat.id ? 'text-white' : 'text-gray-700'
									}`}>{cat.name}</Text>
								</Pressable>
							))}
						</View>

						{selectedPreference ? (
							<Pressable 
								className="bg-primary rounded-xl py-3 flex-row items-center justify-center"
								onPress={() => {
									setShowRecommendations(false);
									setSelectedPreference(null);
								}}
							>
								<MaterialIcons name="clear" size={18} color="#fff" />
								<Text className="text-white ml-2 font-gbold text-sm">Clear Filter</Text>
							</Pressable>
						) : (
							<Pressable 
								className="bg-primary rounded-xl py-3 flex-row items-center justify-center"
								onPress={() => router.push('/package')}
							>
								<MaterialIcons name="search" size={20} color="#fff" />
								<Text className="text-white ml-2 font-gbold text-sm">Browse All Packages</Text>
							</Pressable>
						)}
					</View>
				</View>
				{/* Services */}
				<View className="px-6 mt-8 mb-8">
					<Text className="text-2xl font-gbold mb-1">Our Services</Text>
					<Text className="text-sm font-gregular text-gray-600 mb-4">Everything you need for a perfect trip</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
						{services.map(s => (
							<Pressable key={s.title} className="mr-4 w-44 bg-white rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
								<Image source={{ uri: s.img }} className="w-44 h-28" />
								<View className="p-4">
									<View className="flex-row items-center mb-2">
										<View className="bg-primary/10 rounded-full w-8 h-8 items-center justify-center mr-2">
											<MaterialIcons name={s.icon} size={18} color="#7c3aed" />
										</View>
										<Text className="text-sm font-gbold flex-1">{s.title}</Text>
									</View>
									<Text className="text-xs text-gray-600 font-gregular">{s.subtitle}</Text>
								</View>
							</Pressable>
						))}
					</ScrollView>
				</View>

				{/* Recommended/Filtered Packages */}
				<View className="px-6 mb-8">
					<View className="flex-row items-center justify-between mb-4">
						<View>
							<Text className="text-2xl font-gbold mb-1">
								{selectedPreference ? 'Recommended For You' : 'Best Sellers'}
							</Text>
							<Text className="text-sm font-gregular text-gray-600">
								{selectedPreference ? `${recommendationCategories.find(c => c.id === selectedPreference)?.name} destinations` : 'Most popular packages'}
							</Text>
						</View>
						<Pressable onPress={() => router.push('/package')}>
							<Text className="text-sm font-gsemibold text-primary">View All →</Text>
						</Pressable>
					</View>
					<View className="flex-row flex-wrap -mx-2">
						{getFilteredPackages().map((p, i) => (
							<Pressable key={i} className="w-1/2 px-2 mb-4" onPress={() => router.push('/package')}>
								<View className="bg-white rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
									<Image source={{ uri: p.img }} className="w-full h-32" />
									<View className="p-3">
										<Text className="text-sm font-gbold text-gray-800">{p.name}</Text>
										<Text className="text-xs font-gregular text-gray-600 mt-0.5">From ₹{p.price}</Text>
									</View>
								</View>
							</Pressable>
						))}
					</View>
				</View>

				{/* Community Hidden Gems */}
				<View className="px-6 mb-8">
					<View className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#7c3aed' }}>
						<View className="flex-row items-center mb-3">
							<View className="bg-white/20 rounded-full p-2 mr-3">
								<MaterialIcons name="explore" size={28} color="#fff" />
							</View>
							<View className="flex-1">
								<Text className="text-white text-xl font-gbold">Hidden Gems</Text>
								<Text className="text-white/90 text-xs font-gmedium mt-0.5">Discover secret spots shared by travelers</Text>
							</View>
						</View>
						<Text className="text-white/95 text-sm font-gregular mb-4 leading-5">
							Join our community! Share your favorite hidden spots, local experiences, and travel stories with fellow explorers.
						</Text>
						<View className="flex-row space-x-3">
							<Pressable 
								className="flex-1 bg-white rounded-xl py-3 flex-row items-center justify-center"
								onPress={() => router.push('/community')}
							>
								<MaterialIcons name="visibility" size={18} color="#7c3aed" />
								<Text className="text-primary font-gbold ml-1.5 text-sm">Explore</Text>
							</Pressable>
							<Pressable 
								className="flex-1 bg-white/20 border border-white/40 rounded-xl py-3 flex-row items-center justify-center"
								onPress={() => router.push('/community/share')}
							>
								<MaterialIcons name="add-location-alt" size={18} color="#fff" />
								<Text className="text-white font-gbold ml-1.5 text-sm">Share Spot</Text>
							</Pressable>
						</View>
					</View>
				</View>

				{/* Jackpot Deals */}
				<View className="px-6 mb-8">
					<Text className="text-2xl font-gbold mb-1">Jackpot Deals</Text>
					<Text className="text-sm font-gregular text-gray-600 mb-4">Limited time offers on top destinations</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
						{jackpot.map(j => (
							<Pressable key={j.title} className="mr-4" onPress={() => router.push('/package')}>
								<View className="w-52 bg-white rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
									<Image source={{ uri: j.img }} className="w-52 h-36" />
									<View className="p-4">
										<View className="flex-row items-center justify-between">
											<Text className="text-base font-gbold">{j.title}</Text>
											<View className="bg-red-500 rounded-full px-2 py-1">
												<Text className="text-white text-xs font-gbold">HOT</Text>
											</View>
										</View>
										<Text className="text-xs font-gregular text-gray-600 mt-1">Exclusive offers available</Text>
									</View>
								</View>
							</Pressable>
						))}
					</ScrollView>
				</View>

				{/* Filtered/All Locations */}
				<View className="px-6 mb-8">
					<View className="flex-row items-center justify-between mb-4">
						<View>
							<Text className="text-2xl font-gbold mb-1">
								{selectedPreference ? 'Matching Destinations' : 'Top Destinations'}
							</Text>
							<Text className="text-sm font-gregular text-gray-600">Explore the world</Text>
						</View>
						<Pressable onPress={() => router.push('/locations')}>
							<Text className="text-sm font-gsemibold text-primary">View All →</Text>
						</Pressable>
					</View>
					<View className="flex-row flex-wrap -mx-2">
						{getFilteredDestinations().slice(0, 6).map(l => (
							<Pressable key={l.city} className="w-1/2 px-2 mb-4" onPress={() => router.push('/locations')}>
								<View className="bg-white rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
									<Image source={{ uri: l.img }} className="w-full h-28" />
									<View className="p-3">
										<Text className="text-sm font-gbold">{l.city}</Text>
										<Text className="text-xs font-gregular text-gray-600">{l.country}</Text>
									</View>
								</View>
							</Pressable>
						))}
					</View>
				</View>

				{/* FAQ */}
				<View className="px-6 mb-8">
					<Text className="text-2xl font-gbold mb-4">Frequently Asked Questions</Text>
					<FaqItem q="What destinations can I choose?" a="Choose any destination based on your mood: adventure, romance, hills, beaches, heritage or pilgrimage sites." />
					<FaqItem q="Can I get budget-friendly packages?" a="Yes! Set your budget range and book in advance to lock prices." />
					<FaqItem q="When is the best time to book?" a="You can book year-round. Use our filters to find ideal destinations for your travel month." />
					<FaqItem q="What's included in packages?" a="Full details on attractions, accommodations by budget, and memorable experiences." />
				</View>

				{/* Newsletter */}
				<View className="px-6 mb-8">
					<View className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
						<MaterialIcons name="email" size={32} color="#7c3aed" style={{ marginBottom: 12 }} />
						<Text className="text-xl font-gbold mb-2">Stay Updated</Text>
						<Text className="text-sm font-gregular text-gray-700 mb-4">Subscribe for exclusive deals and travel inspiration</Text>
						<TextInput 
							placeholder="Enter your email" 
							className="bg-white rounded-xl px-4 py-3 border border-gray-200 font-gregular mb-3" 
							placeholderTextColor="#999"
							keyboardType="email-address"
						/>
						<Pressable className="bg-primary rounded-xl py-3.5 items-center shadow-md shadow-primary/30">
							<Text className="text-white font-gbold">Subscribe Now</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

function FaqItem({ q, a }) {
	const [open, setOpen] = useState(false);
	return (
		<View className="mb-3">
			<Pressable 
				onPress={() => setOpen(o => !o)} 
				className="flex-row justify-between items-center bg-white rounded-xl px-4 py-3.5 shadow-sm shadow-black/5"
			>
				<Text className="font-gbold text-sm flex-1 mr-2 text-gray-800">{q}</Text>
				<Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={20} color="#7c3aed" />
			</Pressable>
			{open && (
				<View className="bg-gray-50 rounded-xl px-4 py-3 mt-2">
					<Text className="text-xs font-gregular text-gray-700 leading-5">{a}</Text>
				</View>
			)}
		</View>
	);
}
